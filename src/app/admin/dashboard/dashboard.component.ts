import { Component, OnInit } from '@angular/core';
import { DashboardService } from './admin-dashboard-service/dashboard.service';

@Component({
  selector: 'pub-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  earningObj: any

  constructor(
    private dashboardService: DashboardService,
  ) { }

  ngOnInit() {
    this.getcards()
  }
  values = [ ];

  getcards() {
    this.dashboardService.getStoryCards().subscribe(data => {
      if (data['status']) {
        this.values = data['response']
      }
    })
  }
}
