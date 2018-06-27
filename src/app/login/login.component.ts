import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {SnotifyService} from 'ng-snotify';
// import { ThemeModule } from '../@theme/theme.module';

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
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('nb-theme-default');
  }

  model: any = {};

  onSubmit() {
    this.auth.getUserDetails(this.model.email,this.model.password).subscribe(   
      data=>{
        if(data['status']){
        localStorage.setItem('userToken',data.token)
        this.snotifyService.success(data['message'],"success")
        this.auth.setLoggedIn(true)
        this.router.navigate(['/pages/dashboard'])
        }else{
            this.snotifyService.error(data['message'],"Unauthorized",)
        }
        
      }
    )
  }
}
