import { Component } from '@angular/core';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'ngx-chartjs',
  styleUrls: ['./chartjs.component.scss'],
  templateUrl: './chartjs.component.html',
})
export class ChartjsComponent {
  constructor(
    private analyticsService:AnalyticsService
  ) { }
   storyStatusData: any
   storyStatusOption: any
  
  ngOnInit() {

    this.storyStatusData = {
      labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: "#99ffaa"
        // backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
      }, {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: "red"
        // backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
      }],
    };
    this.storyStatusOption = {
      
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        labels: {
          fontColor: "grey",
        },
      },
      scales: {
        xAxes: [
          {
            stacked:true,
            gridLines: {
              display: false,
              color: "grey",
            },
            ticks: {
              fontColor: "grey",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "grey",
            },
            ticks: {
              fontColor: "grey",
            },
          },
        ],
      },
    };
    this.getStoryStatus()
  }
  statusRejected=[]
  getStoryStatus(){
    this.analyticsService.storyStatus().subscribe(data=>{
      console.log("data",data);

      // debugger
      
    },err=>{

    })
  }


}
