import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users/service/users.service';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';

@Component({
  selector: 'button-view',
  template: `
    <button class="btn btn-danger btn-sm" (click)="onClick($event)" *ngIf="renderValue==='1'" >Deactivate</button>
    <button class="btn btn-success btn-sm" (click)="onClick($event)" *ngIf="renderValue==='0'" >Activate</button>
  `,
})
export class ButtonViewComponent implements OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;
  data:any

  // @Output() save: EventEmitter<any> = new EventEmitter();

  // snotifyConfig = {
  //   showProgressBar: false,
  //   position: SnotifyPosition.rightTop,
  // }
  constructor(
    private user:UsersService,
    private snotify: SnotifyService
  ) { }

  ngOnInit() {
    // this.renderData()
  }

  // renderData(){
  //   this.renderValue = this.value.toString();
  // }

  // onClick(event) {
  //   // this.save.emit(event.target.value);
  //   if(this.rowData.acc_active=='1'){
  //     this.data = {
  //       acc_status: '0',
  //       publisher_id: this.rowData.user_id
  //     }
  //   } else {
  //     this.data = {
  //       acc_status:'1',
  //       publisher_id: this.rowData.user_id
  //     }
  //   }

  //   this.snotify.confirm('Are you sure you want to Active Account?', 'Confirm', {
  //     showProgressBar: false,
  //     position: SnotifyPosition.rightTop,
  //     buttons: [
  //       {
  //         text: 'Ok', action: () => {
  
  //         this.snotify.remove();
  //         this.user.changeAccStatus(this.data).subscribe(data => {
  //           if (data['status']) {
  //             this.snotify.success(data['response'], 'Success', this.snotifyConfig)
  //           } else {
  //             this.snotify.warning(data['response'], 'Warning', this.snotifyConfig)
  //           }
  //           }, err => {
  //             this.snotify.error('Something went wrong', 'failure', this.snotifyConfig)
  //           })
  //       },
  //     },
  //       {text: 'Cancel', action: () => {
  //         this.snotify.remove();
  //       }}],
  //   })
  // }
}


