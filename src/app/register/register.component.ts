import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('nb-theme-default');

  }
model:any={}
registerSubmit() {
  // console.log(this.model)
    this.auth.registerUser(this.model).subscribe(   
      (data)=>{
        // localStorage.setItem('userToken',data.token)
        // this.snotifyService.success("email sent successfully","success")
        // this.auth.setLoggedIn(true)
        console.log("hjdlls");
        this.router.navigate(['/login'])
      }
      // ,err=>{
      //   this.snotifyService.error("email or password is incorrect","Unauthorized",)
      // }
    )
  }
}
