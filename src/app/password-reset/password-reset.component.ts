import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent implements OnInit {
   model: any = {}
   resetToken: string = ''

   snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private snotifyService: SnotifyService,
  ) {
    this.route.queryParams.subscribe(data => {
      this.resetToken = data['rt'];
    })
  }

  ngOnInit() {
    // const body = document.getElementsByTagName('body')[0];
    // body.classList.add('nb-theme-default');
  }

  resetSubmit() {
    // console.log(this.model.);
    const passwordResetData = {
      'password': this.model.password,
      'rt': this.resetToken,
    }
    this.auth.passwordReset(passwordResetData).subscribe(data => {
      if (data['status']) {

      this.snotifyService.success(data['message'], 'Success', this.snotifyConfig)
        setTimeout(() => {

          this.router.navigate(['/login'])
        }, 5000);
      // console.log(data);
      } else {
      this.snotifyService.warning(data['message'], 'Warning', this.snotifyConfig)

      }
    }, err => {
      this.snotifyService.error('Something went wrong. Try again later.', this.snotifyConfig)
    })
  }

}
