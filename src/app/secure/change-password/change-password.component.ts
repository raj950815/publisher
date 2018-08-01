import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SnotifyService, SnotifyPosition} from 'ng-snotify';
import { ProfileService } from '../profile/profile-service/profile.service';

@Component({
  selector: 'of-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

  constructor(
    private profile: ProfileService,
    private router: Router,
    private snotifyService: SnotifyService,
  ) { }

  ngOnInit() {
  }
  model: any = {};
  resetSubmit() {
    // let token=localStorage.getItem('userToken')

    this.profile.resetPassword(this.model).subscribe(data => {
      if (data['status']) {
        this.snotifyService.success(data['response'], 'Success', this.snotifyConfig)
        // this.model={}
        // this.f.submitted=false
        setTimeout(() => {

          this.router.navigate(['/profile']);
        }, 3000);
        } else {
          this.snotifyService.warning(data['response'], 'Warning', this.snotifyConfig)
        }
      }, err => {
        this.snotifyService.error('Something went wrong. Try again later.', this.snotifyConfig)
    })
  }
}
