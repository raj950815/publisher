import { Component, OnDestroy,ViewChild } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AnalyticsService } from '../analytics.service';
import { ChartComponent } from 'angular2-chartjs';

@Component({
  selector: 'ngx-chartjs-multiple-xaxis',
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsMultipleXaxisComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;
  @ViewChild(ChartComponent) chart: ChartComponent; 

  constructor(private theme: NbThemeService,
  private analyticsService:AnalyticsService
  ) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: [],
        datasets: [
          // {
        //   label: 'dataset - big points',
        //   data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
        //   borderColor: colors.primary,
        //   backgroundColor: colors.primary,
        //   fill: false,
        //   borderDash: [5, 5],
        //   pointRadius: 8,
        //   pointHoverRadius: 10,
        // }, {
        //   label: 'dataset - individual point sizes',
        //   data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
        //   borderColor: colors.dangerLight,
        //   backgroundColor: colors.dangerLight,
        //   fill: false,
        //   borderDash: [5, 5],
        //   pointRadius: 8,
        //   pointHoverRadius: 10,
        // }, {
        //   label: 'dataset - large pointHoverRadius',
        //   data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
        //   borderColor: colors.info,
        //   backgroundColor: colors.info,
        //   fill: false,
        //   pointRadius: 8,
        //   pointHoverRadius: 10,
        // },
         {
          label: 'earning',
          data: [],
          borderColor: colors.success,
          backgroundColor: colors.success,
          fill: false,
          pointRadius: 8,
          pointHoverRadius: 10,
        }],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        hover: {
          mode: 'index',
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Month',
              },
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value',
              },
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
    this.getCollectiveEarning()
  }
  getCollectiveEarning(){
    this.analyticsService.collectiveEarning().subscribe(data=>{
      if (data["status"]) {
        let response=data["response"]
        console.log(response);
        let dateCollectionLabels=[]
        let earningCollectionData=[]
        response.forEach(obj => {
        dateCollectionLabels.push(obj.credit)
        earningCollectionData.push(obj.date)
        
  
        });
        console.log("colllectionLabels",dateCollectionLabels);
        console.log("earningCollectionData",earningCollectionData);
  
        
        this.data.labels=earningCollectionData
        this.data.datasets[0].data= dateCollectionLabels
        this.chart.chart.update()
        // debugger
      } else {
        
      }
    },err=>{
  
    })
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  
}
