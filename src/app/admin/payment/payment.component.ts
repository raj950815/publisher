import { Component, OnInit } from '@angular/core';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { PaymentService } from './admin-payment-service/payment.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { IMyDrpOptions, IMyDateRangeModel } from 'mydaterangepicker';

@Component({
  selector: 'of-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  paymentData: any
  model: any = {}

  filterData
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
    private payment: PaymentService,
    private snotify: SnotifyService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.model.status = null
    this.spinner.show()
    this.getPaymentInfo()
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
    // this.getcards(this.filterData)
    this.getPaymentInfo()
  }

  getPaymentInfo() {
    this.payment.getPayment().subscribe(data => {
      this.paymentData = data ['response']
      this.spinner.hide()
    }, err => {
      this.spinner.hide()
    })
  }

  paymentStatus(paymentId, userId, paymentStatus) {
    const ChangeStatusData = {
      withdrawl_id : paymentId,
      publisher_id: userId,
      status: paymentStatus,
    }

    this.snotify.confirm('Are you sure you want to Change Status?', 'Confirm', {
      ...this.snotifyConfig,
      buttons: [
        {
          text: 'Ok', action: () => {
          this.snotify.remove();
          this.payment.ChangePaymentStatus(ChangeStatusData).subscribe(data => {
            if (data['status']) {
              this.getPaymentInfo()
              this.snotify.success(data['response'], 'Success', this.snotifyConfig)
            } else {
              this.snotify.warning(data['response'], 'Warning', this.snotifyConfig)
            }
            }, err => {
              this.snotify.error('Something went wrong', 'failure', this.snotifyConfig)
            })
        },
      },
        {text: 'Cancel', action: () => {
          this.snotify.remove();
        }}],
    })
  }

}
