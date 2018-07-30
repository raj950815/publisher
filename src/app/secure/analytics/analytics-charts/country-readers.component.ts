import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AnalyticsService } from '../analytics-service/analytics.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'of-country-readers',
  template: `
    <chart type="pie" [data]="data" [options]="options" *ngIf="dataStatus==true"></chart>
    <div class="no-data-available" *ngIf="dataStatus==false">
       No Data Available.
    </div>
  `,
  styleUrls: ['./analytics-charts.component.scss'],
})
export class CountryReadersComponent implements OnInit, OnDestroy {
  dataStatus: boolean = false
  themeSubscription: any;

  constructor(
    private theme: NbThemeService,
    private analyticsService: AnalyticsService,
    private spinner: NgxSpinnerService,
  ) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {


    });
  }
  data = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: ['#7CB5EC', '#F15C80', '#8085E9', '#712F79', '#90ED7D', '#ADAFBC'],
  }],
};

options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: false,
      },
    ],
  },
  legend: {
    position: 'bottom',
    labels: {
      fontColor: 'grey',
    },
  },
};
  ngOnInit() {
    this.spinner.show()
    this.getCountrywiseUniqueVistors()
  }
getCountrywiseUniqueVistors() {
  this.analyticsService.countryWiseUniqueVisitors().subscribe(data => {
    if (data['status']) {
      this.dataStatus = true
      const response = data['response']
      const unique_count = []
      const labels = []

      Object.keys(response).forEach(key => {
       response[key]['unique_count'] ? unique_count.push(response[key]['unique_count']) : unique_count.push(0)
       labels.push(key)
      })

      this.data.datasets[0].data = unique_count
      this.data.labels = labels
      this.spinner.hide()
    } else {
      this.dataStatus = false
      this.spinner.hide()
    }
  }, err => {
      this.spinner.hide()
  })
}

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
