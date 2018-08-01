import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnotifyService, SnotifyPosition} from 'ng-snotify';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'of-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private snotifyService: SnotifyService,
  ) { }

  ngOnInit() { }

  model: any = {}

  register() {
    this.auth.registerUser(this.model).subscribe(
      data => {
        if (data['status']) {
          this.snotifyService.info(data['response'], 'Success', this.snotifyConfig)
          setTimeout(() => {
            this.router.navigate(['/login'])
          }, 5000);
        } else {
          this.snotifyService.warning(data['response'], 'Warning', this.snotifyConfig)
        }
      }
      , err => {
        this.snotifyService.error('Something went wrong. Try again later.', 'Failure', this.snotifyConfig)
      },
    )
  }
}
