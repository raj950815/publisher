import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics/services/analytics.service';

@Component({
  selector: 'tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {
  model:any = {}

  constructor(
    private analytic:AnalyticsService,
  ) { }

  ngOnInit() {
  }

  trackUpdate(){
    this.analytic.updateTrack(this.model).subscribe(data=>{
      
    })
  }
}
