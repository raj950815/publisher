import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { RssComponent } from './rss/rss.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'reset',
    component: PasswordResetComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'rss',
    component: RssComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  // {
  //   path: 'earnings',
  //   loadChildren: './earnings/earnings.module#EarningsModule',
  // },
  
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
export class AdminRoutingModule {
}
