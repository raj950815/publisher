import { Component, OnInit } from '@angular/core';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { RssService } from './admin-rss-service/rss.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'of-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.scss'],
})
export class RssComponent implements OnInit {

  rssData: any
  snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

  constructor(
    private rss: RssService,
    private snotify: SnotifyService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show()
    this.getRssLinks()
  }

  getRssLinks() {
    this.rss.rssLinks().subscribe(data => {
      this.rssData = data['response']
      this.spinner.hide()
    }, err => {
      this.spinner.hide()
    })
  }

  rssStatus(linkId, linkStatus) {
    const rssLinkChnagedData = {
      link_id: linkId,
      link_status: linkStatus,
    }

    this.snotify.confirm('Are you sure you want to Change Status?', 'Confirm', {
      showProgressBar: false,
      position: SnotifyPosition.rightTop,
      buttons: [
        {
          text: 'Ok', action: () => {
          this.snotify.remove();
          this.rss.ChangeRssStatus(rssLinkChnagedData).subscribe(data => {
            if (data['status']) {
              this.getRssLinks()
              this.snotify.success(data['response'], 'Success', this.snotifyConfig)
            } else {
              this.snotify.warning(data['response'], 'Warning', this.snotifyConfig)
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
