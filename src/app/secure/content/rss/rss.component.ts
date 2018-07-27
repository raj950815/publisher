import { Component, OnInit } from '@angular/core';
import {  SnotifyService, SnotifyPosition } from 'ng-snotify';
import { ContentService } from '../content-service/content.service';

@Component({
  selector: 'of-rss',
  styleUrls: ['./rss.component.scss'],
  templateUrl: './rss.component.html',
})
export class RssComponent implements OnInit {
  model: any = {};

  snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

constructor(
  private content: ContentService,
  private snotify: SnotifyService,
) {}
ngOnInit() {
  this.model.category = null

  this.getFeedLinks()
}
onSubmit() {
  this.content.addRss(this.model).subscribe(data => {
    if (data['status']) {
      // this.model.category = 'Select Category'
      // this.model.feed_link = ''
      this.getFeedLinks();
      this.snotify.success(data['message'], 'Success', this.snotifyConfig)
    } else {
      this.snotify.warning(data['message'], 'Warning', this.snotifyConfig)

    }
  }, err => {
    this.snotify.error('Something went wrong', 'failure', this.snotifyConfig)
  })
}
listRss = []
getFeedLinks() {
  this.content.listRss().subscribe(
    data => {
      if (data['status']) {
       this.listRss = data['response']
      } else {
        this.snotify.warning(data['message'], 'Warning', this.snotifyConfig)
      }
    }, err => {
      this.snotify.error('Something went wrong', 'failure', this.snotifyConfig)
    },
  )
}
deleteLink(linkId) {
  const deleteLinkData = {
    'link_id': linkId,
  }
  this.snotify.confirm('Are you sure you want to delete this feed link?', 'Confirm', {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
    buttons: [
      {
        text: 'Ok', action: () => {

        // debugger
        this.snotify.remove();
        this.content.deleteRssLink(deleteLinkData).subscribe(data => {
          if (data['status']) {
            this.getFeedLinks()
            this.snotify.success(data['message'], 'Success', this.snotifyConfig)
          } else {
            this.snotify.warning(data['message'], 'Warning', this.snotifyConfig)
          }
          }, err => {
            this.snotify.error('Something went wrong', 'failure', this.snotifyConfig)
          })
      },
    },
      {text: 'Cancel', action: () => {
        this.snotify.remove();
      }}],
  })
}
}
