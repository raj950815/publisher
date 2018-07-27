import { Component } from '@angular/core';

import { MENU_ITEMS } from './admin-menu';

@Component({
  selector: 'of-pages',
  template: `
    <of-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </of-sample-layout>
  `,
})
export class AdminComponent {

  menu = MENU_ITEMS;
}
