import { Component, OnInit } from '@angular/core';
import { ButtonViewComponent } from '../button-view/button-view.component';
import { PaymentService } from './service/payment.service';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  // settings = {
  //   actions: false,
  //   columns: {
  //     id: {
  //       title: 'ID',
  //     },
  //     user_id: {
  //       title: 'User id',
  //     },
  //     debit: {
  //       title: 'Ammount',
  //     },
  //     status: {
  //       title: 'Payment Status'
  //     },
  //     statu:{
  //       title: 'Action',
  //       type: 'custom',
  //       renderComponent: ButtonViewComponent,
  //       // onComponentInitFunction:(instance)=>{
  //       //   // alert(instance)
  //       //   instance.save.subscribe(row => {
  //       //     alert(`${row.name} saved!`)
  //       //   });
  //       // }
  //     },
  //   },
  // };
  
  paymentData: any
  
  constructor(
    private payment: PaymentService
  ) { }

  ngOnInit() {
    // this.getPaymentInfo()
  }

  // getPaymentInfo(){
  //   this.payment.getPayment().subscribe(data=> {
  //     this.paymentData = data ['response']
  //   })
  // }

}
