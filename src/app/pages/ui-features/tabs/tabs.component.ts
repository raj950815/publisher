import { Component } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { EarningService } from '../../earning.service';

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

  agreement:any = Object
  message :any = Object
  yesterdayEarnings: any
  monthlyEarnings:any
  totalEarnings:any
  withdrawEarnings:any
  completeEarnings:any
  model: any = Object

  constructor(
    private earning:EarningService,
    private snotify:SnotifyService
  ){
    
  }
  
  ngOnInit(){

    this.earning.geAgreementDetails().subscribe(data=>{
      this.agreement=data['response']
    })

    this.earning.getPaymentDetails().subscribe(data=>{
      this.message=data['response']
      console.log(this.message)
      this.model={...this.message}
    console.log("model",this.model)
      // debugger
    })

    this.earning.getYesterdayEarning().subscribe(data=>{
      if(data['status']){
        this.yesterdayEarnings = data['response']
        
      }else{
        this.yesterdayEarnings=0
      }
    })

    this.earning.getMonthlyEarning().subscribe(data=>{
      if(data['status']){
        this.monthlyEarnings = data['response']
      }else{
        this.monthlyEarnings=0
      }
    })
    
    this.earning.getTotalEarning().subscribe(data=>{
      if(data['status']){
        this.totalEarnings = data['response']
        
      }else{
        this.totalEarnings=0
      }
    })

    this.earning.getWithdrawEarnings().subscribe(data=>{
      if(data['status']){
        this.withdrawEarnings = data['response']
      }
    })

    this.earning.getCompleteInfo().subscribe(data=>{
      if(data['status']){
        this.completeEarnings = data['response']
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
  updateSubmit(){
    // console.log("this.model",this.model)
    this.earning.updateBank(this.model).subscribe(data=>{
      if (data["status"]) {
        this.snotify.success(data["message"],"Success")
      } else {
        this.snotify.warning(data["message"],"Warning")
      }
    },err=>{
      this.snotify.warning("Something Went to Wrong","Warning")
    })
  }

}
