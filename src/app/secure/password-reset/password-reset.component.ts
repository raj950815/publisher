import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import {SnotifyService} from 'ng-snotify';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  constructor(
    private profile:ProfileService,
    private route:ActivatedRoute,
    private router:Router,
    private snotifyService:SnotifyService
  ) { }

  ngOnInit() {
  }
  model: any = {};  
  resetSubmit(){
    // let token=localStorage.getItem('userToken')
    
    this.profile.resetPassword(this.model).subscribe(data=>{
      console.log(data);
      
      if(data["status"]){
        this.snotifyService.success(data["message"],"Success")          
        // this.model={}
        // this.f.submitted=false
        setTimeout(() => {
          
        }, 3000);
        this.router.navigate(['pages/dashboard']);
        }else{
          this.snotifyService.warning(data["message"],"Warning")
        }
      },err=>{
        this.snotifyService.error("Something went to wrong")
    })
  } 
}
