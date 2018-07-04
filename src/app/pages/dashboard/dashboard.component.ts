import { Component } from '@angular/core';
import { EarningService } from '../earnings/services/earning.service';
import { DashboardService } from './services/dashboard.service';



@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  earningObj: any
  constructor(

    private earning: EarningService,
    private dashboardService: DashboardService
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
      if (data["status"]) {
        this.values = data["response"]
      } else {
      }
    }, err => {
    })
  }
}