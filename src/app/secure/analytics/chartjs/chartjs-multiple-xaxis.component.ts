import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AnalyticsService } from '../services/analytics.service';


@Component({
  selector: 'ngx-chartjs-multiple-xaxis',
  template: `
    <chart type="line" [data]="data" [options]="options" *ngIf="dataStatus==true"></chart>
    <div class="no-data-available" *ngIf="dataStatus==false">
      No Data Available
    </div>
  `,
  styleUrls: ['./chartjs.component.scss'],
})
export class ChartjsMultipleXaxisComponent implements OnInit, OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;
  dataStatus: boolean = false;


  constructor(private theme: NbThemeService,
  private analyticsService: AnalyticsService,
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

  ngOnInit() {
    this.getCollectiveEarning()
  }
  getCollectiveEarning() {
    this.analyticsService.collectiveEarning().subscribe(data => {
      if (data['status']) {
        this.dataStatus = true
        const response = data['response']
        const dateCollectionLabels = []
        const earningCollectionData = []
        response.forEach(obj => {
        dateCollectionLabels.push(obj.credit)
        earningCollectionData.push(obj.date)


        });
        this.data.labels = earningCollectionData
        this.data.datasets[0].data = dateCollectionLabels

        // debugger
      } else {
        this.dataStatus = false
      }
    }, err => {

    })
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }


}
