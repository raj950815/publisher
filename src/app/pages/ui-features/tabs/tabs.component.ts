import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from "./modal/modal.component";
import { AuthService } from '../../../auth.service';

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

  model: any = {};
  message :any =Object

  constructor(private auth:AuthService){}
  
  ngOnInit(){
    this.auth.getPaymentDetails().subscribe(data=>{
      console.log("hello",data)
      this.message=data['response']
      console.log(this.message);
      
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
    // this.model.token=localStorage.getItem('userToken')
    this.auth.updateBank(this.model).subscribe(data=>{
      
      console.log(data);
      
    })
  }

}
