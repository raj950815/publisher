import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { GridComponent } from './grid/grid.component';

import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { CKEditorComponent } from './ckeditor/ckeditor.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { CustomFormsModule } from 'ng4-validators';

const components = [
  ContentComponent,
  GridComponent,
  CKEditorComponent,

];

@NgModule({
  imports: [
    ThemeModule,
    ContentRoutingModule,
    CKEditorModule,
    SnotifyModule,
    MyDateRangePickerModule,
    CustomFormsModule,
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
export class ContentModule { }
