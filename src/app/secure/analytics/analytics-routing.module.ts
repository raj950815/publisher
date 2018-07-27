import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';
import { AnalyticsChartsComponent } from './analytics-charts/analytics-charts.component';

const routes: Routes = [{
  path: '',
  component: AnalyticsComponent,
  children: [
   {
    path: '',
    component: AnalyticsChartsComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsRoutingModule { }

export const routedComponents = [
  AnalyticsComponent,
  AnalyticsChartsComponent,
];
