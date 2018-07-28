import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { StoryCardComponent } from './story-card/story-card.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    DashboardComponent,
    StatsCardComponent,
    StoryCardComponent,
  ],
})
export class DashboardModule { }
