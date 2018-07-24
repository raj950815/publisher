import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { RssComponent } from './rss/rss.component';
import { PaymentComponent } from './payment/payment.component';
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ButtonViewComponent } from './button-view/button-view.component';

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
    Ng2SmartTableModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    PasswordResetComponent,
    ProfileComponent,
    UsersComponent,
    RssComponent,
    PaymentComponent,
    ButtonViewComponent
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ],
  entryComponents: [
    ButtonViewComponent
  ]
})
export class AdminModule {
}
