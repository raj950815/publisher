import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'of-password-reset',
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

  ngOnInit() { }

  reset() {
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
      } else {
        this.snotifyService.warning(data['message'], 'Warning', this.snotifyConfig)
      }
    }, err => {
      this.snotifyService.error('Something went wrong. Try again later.', this.snotifyConfig)
    })
  }

}
