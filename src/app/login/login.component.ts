import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnotifyService, SnotifyPosition} from 'ng-snotify';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'pub-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

  constructor(
    private router: Router,
    private auth: AuthService,
    private snotifyService: SnotifyService,
  ) { }

  ngOnInit() {
  }

  model: any = {};

  Login() {
    this.auth.getUserDetails(this.model).subscribe(
      data => {
        if (data['status']) {
          localStorage.setItem('userToken', data['token'])
          localStorage.setItem('key', data['key'])
          if (data['key'] === 'qvcmjtifs') {
            this.router.navigate(['/'])
          } else {
            this.router.navigate(['/admin'])
          }

        } else {
          localStorage.removeItem('userToken')
          this.snotifyService.warning(data['message'], 'Warning', this.snotifyConfig)
        }
      }, err => {
        localStorage.removeItem('userToken')
        this.snotifyService.error('Something went wrong. Try again later.', 'Unauthorized', this.snotifyConfig)
      },
    )
  }
}
