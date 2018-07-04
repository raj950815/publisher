import { Component, OnDestroy,ViewChild } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { AnalyticsService } from '../analytics.service';
import { ChartComponent } from 'angular2-chartjs';

@Component({
  selector: 'ngx-chartjs-bar',
  template: `
    <chart type="bar" [data]="data" [options]="options"></chart>
    <b class="no-data-available" *ngIf="!data">No Data Available</b>
  `,
})
export class ChartjsBarComponent implements OnDestroy {
  @ViewChild(ChartComponent) chart: ChartComponent; 
 
  data: any;
  options: any;
  themeSubscription: any;

  constructor(
    private theme: NbThemeService,
    private analyticsService:AnalyticsService
  ) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: [],
        datasets: [{
          data: [],
          label: 'Approved',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
        }, {
          data: [],
          label: 'Rejected',
          backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
        }],
      };

      this.options = {        
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          position:"bottom",
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
            
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };
    });
  }
ngOnInit(){
this.getStoryStatus()
}
getStoryStatus(){
  this.analyticsService.storyStatus().subscribe(data=>{
    console.log("data",data);
    
    if (data["status"]) {
      let rejected=[]
      let approved=[]
      let response=data["response"]
      Object.keys(response).forEach(key=>{
        
        // console.log("keys",response[key]);
        response[key]["approved"]?approved.push(response[key]["approved"]):approved.push(0)
        response[key]["rejected"]?rejected.push(response[key]["rejected"]):rejected.push(0)
        
        
      })
      // console.log("keys",Object.keys(response));
      
      this.data.labels          =Object.keys(response)
      this.data.datasets[0].data=approved
      this.data.datasets[1].data=rejected
      this.chart.chart.update()
      console.log("methods",this.chart.chart);
      
      // this.chart.chart
    } else {
      
    }

    // debugger
    
  },err=>{

  })
}
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
