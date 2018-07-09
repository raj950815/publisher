import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import {  SnotifyService } from 'ng-snotify';

@Component({
  selector: 'ngx-grid',
  styleUrls: ['./grid.component.scss'],
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit {
constructor(
  private content: ContentService,
  private snotify: SnotifyService,
) {}
ngOnInit() {
  this.model.category = 'Select Category'

  this.getFeedLinks()
}
model: any = {};
onSubmit() {
  this.content.addRss(this.model).subscribe(data => {
    if (data['status']) {
      this.model.category = 'Select Category'
      this.model.feed_link = ' '
      this.getFeedLinks();
      this.snotify.success(data['message'], 'Success')
    } else {
      this.snotify.warning(data['message'], 'Warning')

    }
  }, err => {
    this.snotify.error('Something went wrong', 'failure')
  })
}
listRss = []
getFeedLinks() {
  this.content.listRss().subscribe(
    data => {
      if (data['status']) {
       this.listRss = data['response']
      } else {
        this.snotify.warning(data['message'], 'Warning')
      }
    }, err => {
      this.snotify.error('Something went wrong', 'failure')
    },
  )
}
deleteLink(linkId) {
  const deleteLinkData = {
    'link_id': linkId,
  }
  this.snotify.confirm('Are you want to delete this feed link ', 'Confirm', {
    buttons: [
      {
        text: 'Ok', action: () => {

        // debugger
        this.snotify.remove();
        this.content.deleteRssLink(deleteLinkData).subscribe(data => {
          if (data['status']) {
            this.getFeedLinks()
            this.snotify.success(data['message'], 'Success')
          } else {
            this.snotify.warning(data['message'], 'Warning')
          }
          }, err => {
            this.snotify.error('Something went wrong', 'failure')
          })
      },
    },
      {text: 'Cancel', action: () => {
        this.snotify.remove();
      }}],
  })


}
}
