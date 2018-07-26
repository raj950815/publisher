import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'pub-mail-verify',
  templateUrl: './mail-verify.component.html',
  styleUrls: ['./mail-verify.component.scss'],
})
export class MailVerifyComponent implements OnInit {
  h: null;
  message: string
    constructor(
      private auth: AuthService,
      private route: ActivatedRoute,
    ) {
      this.route.queryParams.subscribe(data => {
        this.h = data['h'];
      })
     }

    ngOnInit() {
      // const body = document.getElementsByTagName('body')[0];
      // body.classList.add('nb-theme-default');
      this.auth.mailConfirm(this.h).subscribe(
        data => {
          this.message = data['message']
        }, err => {
          this.message = 'Something went wrong. Try again later.'
        },
    )
    }

}
