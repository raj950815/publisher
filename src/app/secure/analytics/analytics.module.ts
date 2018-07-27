import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';

import { ThemeModule } from '../../@theme/theme.module';

import { AnalyticsRoutingModule, routedComponents } from './analytics-routing.module';
import { StoryStatusComponent } from './analytics-charts/story-status.component';
import { WeeklyEarningComponent } from './analytics-charts/weekly-earning.component';
import { CountryReadersComponent } from './analytics-charts/country-readers.component';
import { MonthlyViewsComponent } from './analytics-charts/monthly-views.component';
import { ChartjsLineComponent } from './analytics-charts/chartjs-line.component';

const components = [
  WeeklyEarningComponent,
  StoryStatusComponent,
  CountryReadersComponent,
  MonthlyViewsComponent,
  ChartjsLineComponent,
];

@NgModule({
  imports: [ThemeModule, AnalyticsRoutingModule, ChartModule],
  declarations: [...routedComponents, ...components],
})
export class AnalyticsModule {}
