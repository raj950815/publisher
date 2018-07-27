import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'of-monthly-views',
  template: `
    <chart type="horizontalBar" [data]="data" [options]="options" *ngIf="dataStatus==true"></chart>
    <div class="no-data-available" *ngIf="dataStatus==false">
      No Data Available.
   </div>
  `,
  styleUrls: ['./analytics-charts.component.scss'],
})
export class MonthlyViewsComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;
  dataStatus: boolean = false

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: colors.infoLight,
            borderWidth: 1,
            data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          }, {
            label: 'Dataset 2',
            backgroundColor: colors.successLight,
            data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          },
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          rectangle: {
            borderWidth: 2,
          },
        },
        scales: {
          xAxes: [
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
          yAxes: [
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
        },
        legend: {
          position: 'right',
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  private random() {
    return Math.round(Math.random() * 100);
  }
}
