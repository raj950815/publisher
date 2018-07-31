import { Component, OnInit } from '@angular/core';
import { DashboardService } from './admin-dashboard-service/dashboard.service';
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
    private dashboardService: DashboardService,
    private spinner: NgxSpinnerService,
    private snotify: SnotifyService
  ) { }

  ngOnInit() {
    this.spinner.show()
    this.getcards()
  }
  values = [];

  getcards() {
    this.dashboardService.getStoryCards().subscribe(data => {
      this.values = data['response']
      this.spinner.hide()
    }, err => {
      this.spinner.hide()
      this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig)
    })
  }
}
