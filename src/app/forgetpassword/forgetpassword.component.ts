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
response=false
  ngOnInit() {
  }
  model:any={}
  message=""
forgetSubmit(){
  // debugger
    this.auth.fogetPasswordRequest(this.model).subscribe(data=>{
      if(data["status"]){
        this.message=data["message"]
       this.response=true
        // this.snotifyService.simple(message,"success");
      }else{
        this.response=false
        this.snotifyService.warning(data["message"],"warning");
      }
    },err=>{
      this.snotifyService.error("Something went wrong. Try again later.","error");

    });
  }
}
