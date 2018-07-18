import { Component, OnInit } from '@angular/core';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { EarningService } from '../services/earning.service';
import { IMyDrpOptions, IMyDateRangeModel } from 'mydaterangepicker';

@Component({
  selector: 'pub-earning-tabs',
  styleUrls: ['./earning.component.scss'],
  templateUrl: './earning.component.html',
})
export class EarningComponent implements OnInit {
  snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

  myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
  };

  // For example initialize to specific date (09.10.2018 - 19.10.2018). It is also possible
  // to set initial date range value using the selDateRange attribute.
  begin = new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000))
  end = new Date()
  dateModel: any = {
    beginDate: { year: this.begin.getFullYear(), month: this.begin.getMonth() + 1, day: this.begin.getDate() },
    endDate: { year: this.end.getFullYear(), month: this.end.getMonth() + 1, day: this.end.getDate() },
  };
  agreement: any = Object
  bInfo: any
  // yesterdayEarnings: any
  // monthlyEarnings:any
  earningObj: any
  withdrawEarnings: any = []
  dateWiseEarnings: any = []
  model: any = {}
  pytInfoButtonText: string = 'Submit'
  constructor(
    private earning: EarningService,
    private snotify: SnotifyService,
  ) {

  }
  onDateRangeChanged(event: IMyDateRangeModel) {
    const beginDay = event.beginDate.day < 10 ? '0' + event.beginDate.day : event.beginDate.day;
    const beginMonth = event.beginDate.month < 10 ? '0' + event.beginDate.month : event.beginDate.month;
    const beginYear = event.beginDate.year

    const endDay = event.endDate.day < 10 ? '0' + event.endDate.day : event.endDate.day;
    const endMonth = event.endDate.month < 10 ? '0' + event.endDate.month : event.endDate.month;
    const endYear = event.endDate.year

    const date_range = {
      'from': beginYear + '-' + beginMonth + '-' + beginDay,
      'to': endYear + '-' + endMonth + '-' + endDay,
    }
    this.dateWiseEarning(date_range)

  }
  dateWiseEarning(dateWiseEarningData: any) {
    this.earning.dateWiseEarning(dateWiseEarningData).subscribe(data => {
      if (data['status']) {
        // debugger
        this.dateWiseEarnings = data['response']
      } else {
        this.dateWiseEarnings = []
        // this.completeEarnings=[]
      }
    }, err => {
      // alert()
    })
  }
  withdrawEarningStats() {
    this.earning.getWithdrawEarnings().subscribe(data => {
      if (data['status']) {
        this.withdrawEarnings = data['response']
      } else {
        this.withdrawEarnings = []
      }
    })
  }
  getpaymentDetails() {
    this.earning.getPaymentDetails().subscribe(data => {
      if (data['status']) {
        this.bInfo = data['response']
        this.model = { ...this.bInfo }
        this.pytInfoButtonText = 'UPDATE'
      } else {
        this.pytInfoButtonText = 'SUBMIT'
        this.model.payment_method = 'paypal'
      }
    }, err => {
      // this.model.payment_method="paypal"
    })
  }
  updateSubmit() {
    this.earning.updateBank(this.model).subscribe(data => {
      if (data['status']) {
        this.snotify.success(data['message'], 'Success', this.snotifyConfig)
      } else {
        this.snotify.warning(data['message'], 'Warning', this.snotifyConfig)
      }
    }, err => {
      this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig)
    })
  }
  withdrawAmount: string = ''
  withdrawAmountRequest() {
    // alert(this.withdrawAmount)
    this.snotify.confirm('Are you want to withdraw ', 'Confirm',
  {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
    buttons: [
      {
        text: 'Ok', action: () => {
        const withdrawData = {
          amount: this.withdrawAmount,
        }
        // debugger
        this.snotify.remove();
        this.earning.requestWithdrawAmount(withdrawData).subscribe(data => {
          // alert(data["status"])
          if (data['status']) {
            // debugger
            this.withdrawEarningStats();
            this.getEarnings();
            this.withdrawAmount = ''
            this.snotify.success(data['message'], 'Success', this.snotifyConfig)
            // this.

          } else {
            alert()
            this.snotify.warning(data['message'], 'Warning', this.snotifyConfig)
          }
        }, err => {
          this.snotify.error('something went wrong', 'Error', this.snotifyConfig)
        })
      },
    },
      {text: 'Cancel', action: () => {
        this.snotify.remove();
      }}],
  },

  )


  }

  getEarnings() {

    this.earning.getEarningStats().subscribe(data => {
      if (data['status']) {
        this.earningObj = data['response']

      } else {
        // this.earningObj={}
      }
    })
  }
  ngOnInit() {
    this.getEarnings()
    this.dateWiseEarning({});
    this.withdrawEarningStats();
    this.getpaymentDetails();



    this.earning.geAgreementDetails().subscribe(data => {
      if (data['status']) {
        this.agreement = data['response']
      } else {
        this.agreement = ' '
      }
    });

  }
}
