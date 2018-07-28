import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard-service/dashboard.service';
import { EarningService } from '../earnings/earning-service/earning.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'of-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  earningObj: any

  constructor(
    private earning: EarningService,
    private dashboardService: DashboardService,
    private spinner: NgxSpinnerService,
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
    })
  }
}
