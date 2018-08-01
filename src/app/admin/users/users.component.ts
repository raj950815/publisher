import { Component, OnInit } from '@angular/core';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { UsersService } from './admin-users-service/users.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'of-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userInfo: any
  model: any = {}
  filterData: any
  snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

  constructor(
    private users: UsersService,
    private snotify: SnotifyService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.model.status = null
    this.spinner.show()
    this.publisherDetails(this.filterData);
  }

  statusWiseUsers(status) {
    this.filterData = {
      status: status,
    }
    this.publisherDetails(this.filterData)
  }

  search(searchData) {
    this.filterData = {
      status: searchData,
    }
    this.publisherDetails(this.filterData)
  }

  publisherDetails(filterData) {
    this.users.getUsersInfo(filterData).subscribe(data => {
      this.userInfo = data['response']
      this.spinner.hide()
    }, err => {
      this.spinner.hide()
    })
  }

  AccountStatus(userId, status) {
    const AccountStatusData = {
      publisher_id: userId,
      acc_status: status,
    }

    this.snotify.confirm('Are you sure you want to Change Status?', 'Confirm', {
      showProgressBar: false,
      position: SnotifyPosition.rightTop,
      buttons: [
        {
          text: 'Ok', action: () => {
          this.snotify.remove();
          this.users.changeAccStatus(AccountStatusData).subscribe(data => {
            if (data['status']) {
              this.publisherDetails(this.filterData);
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
