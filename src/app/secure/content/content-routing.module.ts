import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content.component';
import { CKEditorComponent } from './ckeditor/ckeditor.component';
import { RssComponent } from './rss/rss.component';


const routes: Routes = [{
  path: '',
  component: ContentComponent,
  children: [ {
    path: 'rss',
    component: RssComponent,
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
