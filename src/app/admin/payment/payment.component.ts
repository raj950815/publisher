import { Component, OnInit } from '@angular/core';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { PaymentService } from './admin-payment-service/payment.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'of-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  paymentData: any
  model: any = {}
  filterData: any
  snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

  constructor(
    private payment: PaymentService,
    private snotify: SnotifyService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.model.status = null
    this.spinner.show()
    this.getPaymentInfo(this.filterData)
  }

  search(searchData) {
    this.filterData = {
      search: searchData,
    }
    this.getPaymentInfo(this.filterData)
  }
  statusWisePayment(status) {
    this.filterData = {
      status: status,
    }
    this.getPaymentInfo(this.filterData)
  }

  getPaymentInfo(filterData) {
    this.payment.getPayment(filterData).subscribe(data => {
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
              this.getPaymentInfo(this.filterData)
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
