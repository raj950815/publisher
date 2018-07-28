import { Component, OnInit } from '@angular/core';
import { DashboardService } from './admin-dashboard-service/dashboard.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'of-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  earningObj: any

  constructor(
    private dashboardService: DashboardService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show()
    this.getcards()
  }
  values = [ ];

  getcards() {
    this.dashboardService.getStoryCards().subscribe(data => {
      this.values = data['response']
      this.spinner.hide()
    }, err => {
      this.spinner.hide()
    })
  }
}
