import { Component, OnDestroy, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-kitten',
  styleUrls: ['./kitten.component.scss'],
  templateUrl: './kitten.component.html',
})
export class KittenComponent implements OnDestroy {

  // currentTheme: string;
  // themeSubscription: any;

  constructor(
    private _sanitizer: DomSanitizer
    // private themeService: NbThemeService
  ) {
    // this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
    //   this.currentTheme = theme.name;
    // });
  }
  @Input() storyCard: any;
  image:any
  ngOnDestroy() {
    // this.themeSubscription.unsubscribe();
  }
  ngOnInit(){
    
    this.image = this._sanitizer.bypassSecurityTrustStyle(`url(${this.storyCard["cover_image"]})`);
  }
}
