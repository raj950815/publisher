import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import { ResetComponent } from './reset/reset.component';
import { TemplateComponent } from './template/template.component';


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    SnotifyModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ResetComponent,
    TemplateComponent
  ],
  providers:[
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ],
})
export class PagesModule {
}
