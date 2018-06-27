import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mail-confirm',
  templateUrl: './mail-confirm.component.html',
  styleUrls: ['./mail-confirm.component.scss']
})
export class MailConfirmComponent implements OnInit {
h:null;
message:string
  constructor(
    private auth:AuthService,
    private route:ActivatedRoute,
    private router:Router
  ) { 
    route.queryParams.subscribe(data=>{
      this.h=data['h'];
      // this.id=data['id'];
      console.log(data)
    })
   }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('nb-theme-default');
    this.auth.confirmMail(this.h).subscribe(
      data=>this.message=data['message']
  )
  }

}
