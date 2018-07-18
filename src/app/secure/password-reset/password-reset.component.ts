import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SnotifyService, SnotifyPosition} from 'ng-snotify';
import { ProfileService } from '../profile/services/profile.service';

@Component({
  selector: 'pub-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent implements OnInit {
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
        this.snotifyService.success(data['message'], 'Success', this.snotifyConfig)
        // this.model={}
        // this.f.submitted=false
        setTimeout(() => {

          this.router.navigate(['/profile']);
        }, 3000);
        } else {
          this.snotifyService.warning(data['message'], 'Warning', this.snotifyConfig)
        }
      }, err => {
        this.snotifyService.error('Something went wrong. Try again later.', this.snotifyConfig)
    })
  }
}
