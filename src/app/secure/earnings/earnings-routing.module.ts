import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarningsComponent } from './earnings.component';
import { EarningComponent } from './earning/earning.component';


const routes: Routes = [{
  path: '',
  component: EarningsComponent,
  children: [{
    path: '',
    component: EarningComponent,

  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarningsRoutingModule { }
