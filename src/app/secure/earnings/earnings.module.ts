import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { EarningsRoutingModule } from './earnings-routing.module';
import { EarningsComponent } from './earnings.component';
import { EarningComponent } from './earning/earning.component';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import { MyDateRangePickerModule } from 'mydaterangepicker';

const components = [
  EarningsComponent,

  EarningComponent,

];

@NgModule({
  imports: [
    ThemeModule,
    EarningsRoutingModule,

    SnotifyModule,
    MyDateRangePickerModule,
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [

  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ],
})
export class EarningsModule { }
