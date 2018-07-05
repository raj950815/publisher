import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { KittenComponent } from './kitten/kitten.component';
import { StatusCardComponent } from './status-card/status-card.component';



@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    KittenComponent,
    StatusCardComponent,

  ],
})
export class DashboardModule { }
