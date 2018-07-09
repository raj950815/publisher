import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import { ProfileComponent } from './profile/profile.component';
import { CustomFormsModule } from 'ng4-validators';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    CustomFormsModule,
    DashboardModule,
    MiscellaneousModule,
    SnotifyModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    PasswordResetComponent,
    ProfileComponent,
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ],
})
export class PagesModule {
}
