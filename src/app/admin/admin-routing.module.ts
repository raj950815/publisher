import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
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
