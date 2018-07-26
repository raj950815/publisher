import { Component } from '@angular/core';

import { MENU_ITEMS } from './admin-menu';

@Component({
  selector: 'pub-pages',
  template: `
    <pub-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </pub-sample-layout>
  `,
})
export class AdminComponent {

  menu = MENU_ITEMS;
}
