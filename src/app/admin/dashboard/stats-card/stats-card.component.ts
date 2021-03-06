import { Component, Input } from '@angular/core';

@Component({
  selector: 'of-stats-card',
  styleUrls: ['./stats-card.component.scss'],
  template: `
    <nb-card (click)="on = on" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon {{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title">{{ title }}</div>
        <div class="status">{{ val}}</div>
      </div>
    </nb-card>
  `,
})
export class StatsCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() val: string;
  @Input() on = true;
}
