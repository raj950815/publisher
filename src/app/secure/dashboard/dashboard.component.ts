import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard-service/dashboard.service';
import { EarningService } from '../earnings/earning-service/earning.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';

@Component({
  selector: 'of-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  earningObj: any
  snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

  constructor(
    private earning: EarningService,
    private dashboardService: DashboardService,
    private spinner: NgxSpinnerService,
    private snotify: SnotifyService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.getcards()
    this.getEarning()
  }
  values = [ ];

  getEarning() {
    this.earning.getEarningStats().subscribe(data => {
      if (data['status']) {
        this.earningObj = data['response']
        this.spinner.hide();
      } else {
        this.earningObj = {}
        this.spinner.hide();
      }
    })
  }

  getcards() {
    this.dashboardService.getStoryCards().subscribe(data => {
      if (data['status']) {
        this.values = data['response']
        this.spinner.hide();
      }
    }, err => {
      this.spinner.hide()
      this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig)
    })
  }
}
