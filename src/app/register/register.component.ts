import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router:Router,
    private snotifyService: SnotifyService
  ) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('nb-theme-default');

  }
model:any={}
registerSubmit() {
    this.auth.registerUser(this.model).subscribe(   
      (data)=>{
      // let message=data.message
      // this.snotifyService.success(data,"success");
      this.router.navigate(['/login'])
      }
      // ,err=>{
      //   this.snotifyService.error(this.data,"Unauthorized",)
      // }
    )
  }
}
