import { Component, OnInit } from '@angular/core';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'of-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {

  snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

  constructor(
    private auth: AuthService,
    private snotifyService: SnotifyService,
  ) { }

  response = false

  ngOnInit() {
  }

  model: any = {}
  message = ''

forgot() {
    this.auth.forgotPasswordRequest(this.model).subscribe(data => {
      if (data['status']) {
        this.message = data['response']
        this.response = true
      } else {
        this.response = false
        this.snotifyService.warning(data['response'], 'warning', this.snotifyConfig);
      }
    }, err => {
      this.snotifyService.error('Something went wrong. Try again later.', 'error', this.snotifyConfig);
    });
  }
}
