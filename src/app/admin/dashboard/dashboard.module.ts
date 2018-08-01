import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { StoryCardComponent } from './story-card/story-card.component';
import { SnotifyModule } from 'ng-snotify';
import { MyDateRangePickerModule } from 'mydaterangepicker';

@NgModule({
  imports: [
    ThemeModule,
    SnotifyModule,
    MyDateRangePickerModule,
  ],
  declarations: [
    DashboardComponent,
    StatsCardComponent,
    StoryCardComponent,
  ],
})
export class DashboardModule { }
