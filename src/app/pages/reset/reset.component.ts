import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  // model:[]
  constructor(
    private auth:AuthService,
    private route:ActivatedRoute,
    private router:Router,
    private snotifyService:SnotifyService
  ) { }

  ngOnInit() {
  }
  model: any = {};  
  resetSubmit(){
    let token=localStorage.getItem('userToken')
    
    this.auth.resetpassword(this.model.password,token).subscribe(data=>{
      if(data){
        this.snotifyService.success("Password Successfully Changed.")
          this.router.navigate['/login']
        // console.log(data); 
        }
      },err=>{
        this.snotifyService.error("Something went to wrong")
    })
  }

}
