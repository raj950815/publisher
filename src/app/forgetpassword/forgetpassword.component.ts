import { Component, OnInit } from '@angular/core';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'pub-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss'],
})
export class ForgetpasswordComponent implements OnInit {

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
forgetSubmit() {
  // debugger
    this.auth.fogetPasswordRequest(this.model).subscribe(data => {
      if (data['status']) {
        this.message = data['message']
       this.response = true
        // this.snotifyService.simple(message,"success");
      } else {
        this.response = false
        this.snotifyService.warning(data['message'], 'warning', this.snotifyConfig);
      }
    }, err => {
      this.snotifyService.error('Something went wrong. Try again later.', 'error', this.snotifyConfig);

    });
  }
}
