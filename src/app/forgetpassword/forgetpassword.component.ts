import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(
    private router:Router,
    private auth:AuthService,
    private snotifyService: SnotifyService
  ) { }

  ngOnInit() {
  }
  model:any={}
forgetSubmit(){
  // debugger
    this.auth.fogetPasswordRequest(this.model.email).subscribe(data=>{
      if(data){
       let message=data.message
        this.snotifyService.simple(message,"success");
      }
    },err=>{
      this.snotifyService.error("there is an issue","error");

    });
  }
}
