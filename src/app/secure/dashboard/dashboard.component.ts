import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard-service/dashboard.service';
import { EarningService } from '../earnings/earning-service/earning.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { IMyDrpOptions, IMyDateRangeModel } from 'mydaterangepicker';

@Component({
  selector: 'of-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  earningObj: any
  filterData: any
  storyCardData: any
  dataStatus: boolean
  model: any = {}
  snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

  myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'dd-mm-yyyy',
  };

  begin = new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000))
  end = new Date()
  dateModel: any = {
    beginDate: { year: this.begin.getFullYear(), month: this.begin.getMonth() + 1, day: this.begin.getDate() },
    endDate: { year: this.end.getFullYear(), month: this.end.getMonth() + 1, day: this.end.getDate() },
  };

  constructor(
    private earning: EarningService,
    private dashboardService: DashboardService,
    private spinner: NgxSpinnerService,
    private snotify: SnotifyService,
  ) { }

  ngOnInit() {
    this.model.status = null
    this.spinner.show();
    this.getcards(this.filterData)
    this.getEarning()
  }

  onDateRangeChanged(event: IMyDateRangeModel) {
    const beginDay = event.beginDate.day < 10 ? '0' + event.beginDate.day : event.beginDate.day;
    const beginMonth = event.beginDate.month < 10 ? '0' + event.beginDate.month : event.beginDate.month;
    const beginYear = event.beginDate.year

    const endDay = event.endDate.day < 10 ? '0' + event.endDate.day : event.endDate.day;
    const endMonth = event.endDate.month < 10 ? '0' + event.endDate.month : event.endDate.month;
    const endYear = event.endDate.year

    this.filterData = {
      'from': beginYear + '-' + beginMonth + '-' + beginDay,
      'to': endYear + '-' + endMonth + '-' + endDay,
    }
    this.getcards(this.filterData)
  }

  statusWiseStories(status) {
    this.filterData = {
      status: status,
    }
    this.getcards(this.filterData)
  }

  getEarning() {
    this.earning.getEarningStats().subscribe(data => {
      if (data['status']) {
        this.earningObj = data['response']
        this.spinner.hide();
      } else {
        this.earningObj = {}
        this.spinner.hide();
      }
    })
  }

  getcards(filterData) {
    this.dashboardService.getStoryCards(filterData).subscribe(data => {
      if (data['status']) {
        this.storyCardData = data['response']
        this.dataStatus = true
        this.spinner.hide();
      } else {
        this.dataStatus = false
        this.spinner.hide()
      }
    }, err => {
      this.spinner.hide()
      this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig)
    })
  }
}
