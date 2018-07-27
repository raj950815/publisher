import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'reset',
    component: ChangePasswordComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  // {
  //   path: 'earnings',
  //   loadChildren: './earnings/earnings.module#EarningsModule',
  // },
  {
    path: 'content',
    loadChildren: './content/content.module#ContentModule',
  },
  {
    path: 'analytics',
    loadChildren: './analytics/analytics.module#AnalyticsModule',
  },
  {
    path: 'tracking',
    component: TrackingComponent,
  },
  //  {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: '**',
    component: NotFoundComponent,
  },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
