import { Component } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'of-ckeditor',
  template: `
    <nb-card>
      <nb-card-header>
        Editor
      </nb-card-header>
      <nb-card-body>
        <ckeditor [config]="{ extraPlugins: 'divarea', height: '320' }"></ckeditor>
       <div class="row">
            <div class="offset-sm-6 col-sm-2">
              <button type="submit" class="btn btn-warning">Cancel</button>
            </div>
            <div class="col-sm-2">
              <button type="submit" class="btn btn-info">Preview</button>
            </div>
            <div class="col-sm-2">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
       </div>
      </nb-card-body>
    </nb-card>
  `,
})
export class CKEditorComponent {
}
