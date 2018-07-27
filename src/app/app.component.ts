import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pub-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
