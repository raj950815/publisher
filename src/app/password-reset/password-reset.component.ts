import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent implements OnInit {
   model: any = {}
   resetToken: string = ''
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

      this.snotifyService.success(data['message'], 'Success')
        setTimeout(() => {

          this.router.navigate(['/login'])
        }, 5000);
      // console.log(data);
      } else {
      this.snotifyService.warning(data['message'], 'Warning')

      }
    }, err => {
      this.snotifyService.error('Something went wrong. Try again later.')
    })
  }

}
