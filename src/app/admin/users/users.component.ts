import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from './service/users.service';
import { ViewCell } from "ng2-smart-table";
import { ButtonViewComponent } from '../button-view/button-view.component';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // settings = {
  //   actions: false,
  //   columns: {
  //     user_id: {
  //       title: 'ID',
  //     },
  //     name: {
  //       title: 'Publisher Name',
  //     },
  //     email: {
  //       title: 'Email',
  //     },
  //     asset_url: {
  //       title: 'Website'
  //     },
  //     // contact: {
  //     //   title: 'Contact'
  //     // },
  //     // address: {
  //     //   title: 'Address'
  //     // },
  //     email_verified: {
  //       title: 'Email Status',
  //       valuePrepareFunction:(value)=>{
  //         if(value==='1'){
  //           return 'Verified'
  //         } else {
  //           return 'Not Verified'
  //         }
  //       }
  //     },
  //     acc_active:{
  //       title: 'Account Status',
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


  userInfo:any

  constructor(
    private users: UsersService,
  ) { }

  ngOnInit() {
    // this.publisherDetails();
  }

  // changeData(det){
  //   det.save.subscribe(data=>{
  //     console.log(data);
      
  //   })
  // }

  // publisherDetails(){
  //   this.users.getUsersInfo().subscribe(data=>{
  //     if(data['status']){
  //       this.userInfo = data['response']
  //     }
  //   })
  // }

}
