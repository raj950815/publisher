import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard-service/dashboard.service';
import { EarningService } from '../earnings/earning-service/earning.service';



@Component({
  selector: 'pub-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  earningObj: any
  constructor(

    private earning: EarningService,
    private dashboardService: DashboardService,
  ) { }





  ngOnInit() {
    this.getcards()
    this.earning.getEarningStats().subscribe(data => {
      if (data['status']) {
        this.earningObj = data['response']

      } else {
        this.earningObj = {}
      }
    })
  }
  values = [
  ];

  getcards() {
    this.dashboardService.getStoryCards().subscribe(data => {
      if (data['status']) {
        this.values = data['response']
      } else {
      }
    }, err => {
    })
  }
}
