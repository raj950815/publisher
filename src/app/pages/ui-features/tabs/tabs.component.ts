import { Component } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { EarningService } from '../../earning.service';
import { IMyDrpOptions, IMyDateRangeModel } from 'mydaterangepicker';
@Component({
  selector: 'ngx-tab1',
  template: `
    <p>Early home automation began with labor-saving machines. Self-contained electric or gas powered
      <a target="_blank" href="https://en.wikipedia.org/wiki/Home_appliances">home appliances</a>
      became viable in the 1900s with the introduction of
      <a target="_blank" href="https://en.wikipedia.org/wiki/Electric_power_distribution">electric power distribution
      </a> and led to the introduction of washing machines (1904), water heaters (1889), refrigerators, sewing machines,
      dishwashers, and clothes dryers.
    </p>
  `,
})

export class Tab1Component { }

@Component({
  selector: 'ngx-tab2',
  template: `
    <p>Tab 2 works!</p>
  `,
})
export class Tab2Component { }

@Component({
  selector: 'ngx-tabs',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
})
export class TabsComponent {

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
    endDate: { year: this.end.getFullYear(), month: this.end.getMonth() + 1, day: this.end.getDate() }
  };
  agreement: any = Object
  bInfo: any
  // yesterdayEarnings: any
  // monthlyEarnings:any
  earningObj: any
  withdrawEarnings: any = []
  dateWiseEarnings: any = []
  model: any = {}
  pytInfoButtonText: string = "Submit"
  constructor(
    private earning: EarningService,
    private snotify: SnotifyService
  ) {

  }
  onDateRangeChanged(event: IMyDateRangeModel) {
    let beginDay = event.beginDate.day < 10 ? "0" + event.beginDate.day : event.beginDate.day;
    let beginMonth = event.beginDate.month < 10 ? "0" + event.beginDate.month : event.beginDate.month;
    let beginYear = event.beginDate.year

    let endDay = event.endDate.day < 10 ? "0" + event.endDate.day : event.endDate.day;
    let endMonth = event.endDate.month < 10 ? "0" + event.endDate.month : event.endDate.month;
    let endYear = event.endDate.year

    let date_range = {
      "from": beginYear + "-" + beginMonth + "-" + beginDay,
      "to": endYear + "-" + endMonth + "-" + endDay
    }
    this.dateWiseEarning(date_range)

  }
  dateWiseEarning(data: any) {
    this.earning.dateWiseEarning(data).subscribe(data => {
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
      console.log(data);
      // debugger

      if (data["status"]) {
        this.bInfo = data['response']
        this.model = { ...this.bInfo }
        this.pytInfoButtonText = "UPDATE"
      } else {
        this.pytInfoButtonText = "SUBMIT"
        this.model.payment_method = "paypal"
      }
    }, err => {
      // this.model.payment_method="paypal"
    })
  }
  updateSubmit() {
    console.log("this.model", this.model)
    // debugger
    this.earning.updateBank(this.model).subscribe(data => {
      if (data["status"]) {
        this.snotify.success(data["message"], "Success")
      } else {
        this.snotify.warning(data["message"], "Warning")
      }
    }, err => {
      this.snotify.error("Something Went to Wrong", "Error")
    })
  }
  withdrawAmount: string = ""
  withdrawAmountRequest() {
    // alert(this.withdrawAmount)
    let data = {
      amount: this.withdrawAmount
    }
    // debugger
    this.earning.requestWithdrawAmount(data).subscribe(data => {
      // alert(data["status"])
      if (data["status"]) {
        // debugger
        this.withdrawEarningStats();
        this.getEarnings();
        this.withdrawAmount=''
        this.snotify.success(data["message"], "Success")
        // this.

      } else {
        alert()
        this.snotify.warning(data["message"], "Warning")
      }
    }, err => {
      this.snotify.error("something went wrong", "Error")
    })
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
      if (data["status"]) {
        this.agreement = data['response']
      } else {
        this.agreement = " "
      }
    })








  }

  tabs: any[] = [
    {
      title: 'Route tab #1',
      route: '/pages/ui-features/tabs/tab1',
    },
    {
      title: 'Route tab #2',
      route: '/pages/ui-features/tabs/tab2',
    },
  ];


}
