import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsComponent } from './charts.component';
// import { EchartsComponent } from './echarts/echarts.component';
// import { D3Component } from './d3/d3.component';
import { ChartjsComponent } from './chartjs/chartjs.component';

const routes: Routes = [{
  path: '',
  component: ChartsComponent,
  children: [
   {
    path: '',
    component: ChartjsComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsRoutingModule { }

export const routedComponents = [
  ChartsComponent,

  ChartjsComponent,
];
