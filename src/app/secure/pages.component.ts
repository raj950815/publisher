import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'of-pages',
  template: `
    <of-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </of-sample-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
