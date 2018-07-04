import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiFeaturesComponent } from './ui-features.component';
import { TabsComponent } from './tabs/tabs.component';
import { GridComponent } from './grid/grid.component';


const routes: Routes = [{
  path: '',
  component: UiFeaturesComponent,
  children: [ {
    path: 'grid',
    component: GridComponent,
  },  {
    path: '',
    component: TabsComponent,

  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiFeaturesRoutingModule { }
