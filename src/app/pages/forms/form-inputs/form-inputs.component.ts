import { Component } from '@angular/core';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {
  constructor(private auth:AuthService){}
ngOnInit(){
  // console.log("form",this.auth.getauthenticatedUserId())
  this.auth.getauthenticatedUserId().subscribe(data=>{
    console.log("from",data);
    
  })
}
  starRate = 2;
  heartRate = 4;
}
