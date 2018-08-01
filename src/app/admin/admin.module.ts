import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { RssComponent } from './rss/rss.component';
import { PaymentComponent } from './payment/payment.component';
import { MyDateRangePickerModule } from 'mydaterangepicker';

const PAGES_COMPONENTS = [
  AdminComponent,
];

@NgModule({
  imports: [
    AdminRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    SnotifyModule,
    FormsModule,
    MyDateRangePickerModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    UsersComponent,
    RssComponent,
    PaymentComponent,
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ],
})
export class AdminModule {
}
