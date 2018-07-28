import { Component, OnInit } from '@angular/core';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { AnalyticsService } from '../analytics/analytics-service/analytics.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'of-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss'],
})
export class TrackingComponent implements OnInit {
  model: any = {}
  trackingData: any
  addButton

  snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

  constructor(
    private analytic: AnalyticsService,
    private snotify: SnotifyService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show()
    this.getTrackDetails()
  }

  trackUpdate() {
    this.analytic.updateTrack(this.model).subscribe(data => {
      if (data['status']) {
        this.snotify.success(data['message'], 'Success', this.snotifyConfig)
        this.getTrackDetails();
      } else {
        this.snotify.warning(data['message'], 'Warning', this.snotifyConfig)
      }
    }, err => {
      this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig)
    })
  }
  getTrackDetails() {
    this.analytic.getTrack().subscribe(data => {
      if (data['status']) {
        this.trackingData = data['response']
        this.model = { ...this.trackingData }
        this.addButton = 'Update'
        this.spinner.hide()
      } else {
        this.addButton = 'Add'
        this.spinner.hide()
      }
    })
  }
}
