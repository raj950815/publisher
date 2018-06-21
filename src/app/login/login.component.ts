import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  submitted=false;
  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private auth:AuthService
  ) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  

  get f(){
    return this.loginForm.controls
  }

  login(){
    this.submitted=true;
    this.auth.getUserDetails(this.f.email.value,this.f.password.value).subscribe(
      data=>{
        localStorage.setItem('userToken',data.token)
        this.auth.setLoggedIn(true)
        this.router.navigate(['/pages/dashboard'])
      }
    )
  }
}
