import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';
import { GridComponent } from './grid/grid.component';
import { TabsComponent } from './tabs/tabs.component';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import { MyDateRangePickerModule } from 'mydaterangepicker';

const components = [
  UiFeaturesComponent,
  GridComponent,

  TabsComponent,

];

@NgModule({
  imports: [
    ThemeModule,
    UiFeaturesRoutingModule,

    SnotifyModule,
    MyDateRangePickerModule
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [

  ],
  providers:[
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ]
})
export class UiFeaturesModule { }
