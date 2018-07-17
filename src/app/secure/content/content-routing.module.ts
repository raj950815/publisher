import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content.component';
import { CKEditorComponent } from './ckeditor/ckeditor.component';
import { SyncComponent } from './sync/sync.component';


const routes: Routes = [{
  path: '',
  component: ContentComponent,
  children: [ {
    path: 'sync',
    component: SyncComponent,
  },
   {
    path: 'manual',
    component: CKEditorComponent,

  },
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule { }
