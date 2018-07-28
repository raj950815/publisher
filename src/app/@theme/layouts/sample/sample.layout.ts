import { Component, OnDestroy } from '@angular/core';
import { delay, withLatestFrom } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import {
  NbMediaBreakpoint,
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from '@nebular/theme';

@Component({
  selector: 'of-sample-layout',
  styleUrls: ['./sample.layout.scss'],
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <of-header [position]="sidebar.id === 'start' ? 'normal': 'inverse'"></of-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar">

        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
      <ngx-spinner
      bdColor = "rgba(255,255,255,0)"
      size = "default"
      color = "#40dcb2"
      type = "ball-spin-clockwise"
      ></ngx-spinner>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

    </nb-layout>
  `,
})
export class SampleLayoutComponent implements OnDestroy {

  layout: any = {};
  sidebar: any = {};

  protected layoutState$: Subscription;
  protected sidebarState$: Subscription;
  protected menuClick$: Subscription;

  constructor(
    protected menuService: NbMenuService,
    protected themeService: NbThemeService,
    protected bpService: NbMediaBreakpointsService,
    protected sidebarService: NbSidebarService) {
    // this.layoutState$ = this.stateService.onLayoutState()
    //   .subscribe((layout: string) => this.layout = layout);

    // this.sidebarState$ = this.stateService.onSidebarState()
    //   .subscribe((sidebar: string) => {
    //     this.sidebar = sidebar;
    //   });

    const isBp = this.bpService.getByName('is');
    this.menuClick$ = this.menuService.onItemSelect()
      .pipe(
        withLatestFrom(this.themeService.onMediaQueryChange()),
        delay(20),
    )
      .subscribe(([item, [bpFrom, bpTo]]: [any, [NbMediaBreakpoint, NbMediaBreakpoint]]) => {

        if (bpTo.width <= isBp.width) {
          this.sidebarService.collapse('menu-sidebar');
        }
      });
  }

  ngOnDestroy() {
    // this.layoutState$.unsubscribe();
    // this.sidebarState$.unsubscribe();
    this.menuClick$.unsubscribe();
  }
}
