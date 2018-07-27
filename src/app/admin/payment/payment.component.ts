import { Component, OnInit } from '@angular/core';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { PaymentService } from './admin-payment-service/payment.service';

@Component({
  selector: 'pub-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  paymentData: any
  snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

  constructor(
    private payment: PaymentService,
    private snotify: SnotifyService,
  ) { }

  ngOnInit() {
    this.getPaymentInfo()
  }

  getPaymentInfo() {
    this.payment.getPayment().subscribe(data => {
      this.paymentData = data ['response']
    })
  }

  paymentStatus(paymentId, userId, paymentStatus) {
    const ChangeStatusData = {
      withdrawl_id : paymentId,
      publisher_id: userId,
      status: paymentStatus,
    }

    this.snotify.confirm('Are you sure you want to Change Status?', 'Confirm', {
      showProgressBar: false,
      position: SnotifyPosition.rightTop,
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
