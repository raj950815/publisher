import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'mail-verify',
  templateUrl: './mail-verify.component.html',
  styleUrls: ['./mail-verify.component.scss']
})
export class MailVerifyComponent implements OnInit {
  h:null;
  message:string
    constructor(
      private auth:AuthService,
      private route:ActivatedRoute,
      private router:Router
    ) { 
      route.queryParams.subscribe(data=>{
        this.h=data['h'];
      })
     }
  
    ngOnInit() {
      this.auth.mailConfirm(this.h).subscribe(
        data=>{
          this.message=data['message']
        }
    )
    }
  
}
