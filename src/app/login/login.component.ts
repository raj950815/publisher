import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import {SnotifyService, SnotifyPosition} from 'ng-snotify';
// import { ThemeModule } from '../@theme/theme.module';
import {IMyDrpOptions} from 'mydaterangepicker';
import { AuthService } from '../service/auth.service';
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

  myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};

// For example initialize to specific date (09.10.2018 - 19.10.2018). It is also possible
// to set initial date range value using the selDateRange attribute.
 modal: any = {beginDate: {year: 2018, month: 10, day: 9},
                         endDate: {year: 2018, month: 10, day: 19}};

  constructor(
    private router: Router,
    private auth: AuthService,
    private snotifyService: SnotifyService,
  ) { }

  ngOnInit() {
    // const body = document.getElementsByTagName('body')[0];
    // body.classList.add('nb-theme-default');
  }

  model: any = {};

  onSubmit() {

    this.auth.getUserDetails(this.model).subscribe(
      (data) => {
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
