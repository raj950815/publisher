import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content.component';
import { GridComponent } from './grid/grid.component';
import { CKEditorComponent } from './ckeditor/ckeditor.component';


const routes: Routes = [{
  path: '',
  component: ContentComponent,
  children: [ {
    path: 'sync',
    component: GridComponent,
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
