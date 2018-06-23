import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {SnotifyService} from 'ng-snotify';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginForm:FormGroup
  // submitted=false;
  constructor(
    private router:Router,
    private auth:AuthService,
    private snotifyService: SnotifyService
  ) { }
  
  ngOnInit() {

  }
  

  model: any = {};

  onSubmit() {
    this.auth.getUserDetails(this.model.email,this.model.password).subscribe(   
      (data)=>{

        localStorage.setItem('userToken',data.token)
        this.snotifyService.success("email sent successfully","success")
        this.auth.setLoggedIn(true)
        this.router.navigate(['/pages/dashboard'])
      },err=>{
        this.snotifyService.error("email or password is incorrect","Unauthorized",)
      }
    )
  }
}
