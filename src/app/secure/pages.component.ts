import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'pub-pages',
  template: `
    <pub-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </pub-sample-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
