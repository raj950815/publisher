import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  model: any = {};
    // id:null
    resetToken: null
  
  constructor(
    private auth:AuthService,
    private route:ActivatedRoute,
    private router:Router,
    private snotifyService:SnotifyService
  ) { 
    
    route.queryParams.subscribe(data=>{
      this.resetToken=data['rt'];
      // this.id=data['id'];
      console.log(data)
    })
   }
   
   ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('nb-theme-default');
  }
   
  resetSubmit(){
    // console.log(this.model.);
    let data={
      "password":this.model.password,
      "rt":this.resetToken
    }
    
    this.auth.verify(data).subscribe(data=>{
      if(data){
      this.snotifyService.success("Password Successfully Changed.")
      this.router.navigate(['/login'])
      // console.log(data); 
      }
    },err=>{
      this.snotifyService.error("Something went to wrong")
    })
  }

}
