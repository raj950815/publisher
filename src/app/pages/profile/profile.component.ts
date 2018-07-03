import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileData: any
  model:any={}
  profileInfo:any
  form:FormGroup
  userfile:null
  pubisherImg

  publisherDefaultIcon='../assets/images/user.png'
  pubisherImgUrl='https://s3.amazonaws.com/one-feed/publisher/profile/'
  constructor(
    private profile:ProfileService,
    private snotify:SnotifyService,
    private fb:FormBuilder,
    private router:Router
  ) { 
    this.createForm();
  }

  ngOnInit() {
    this.getProfile()
  }
  getProfile() {
    this.profile.getProfileInfo().subscribe(data => {
        this.profileInfo = data['response']
        this.model = { ...this.profileInfo }
        if(this.model.profile_image==""){
          this.pubisherImg=this.publisherDefaultIcon
        }else{
          this.pubisherImg=this.pubisherImgUrl+this.model.profile_image
        }
      }
    )
  }

  updateSubmit(){
    this.profile.updateProfile(this.model).subscribe(data=>{
      if (data["status"]) {
        this.snotify.success(data["message"], "Success")
      } else {
        this.snotify.warning(data["message"], "Warning")
      }
    }, err => {
      this.snotify.error("Something Went to Wrong", "Error")
    })
  }

  createForm(){
    this.form=this.fb.group({
      userfile:[null,Validators.required]
    })
  }

  onFileChange(event) {
    let file=event.target.files[0]
    this.form.get('userfile').setValue(file)
  }

  onUpload(){
    let input= new FormData();
    input.append('userfile',this.form.get('userfile').value);
    
    this.profile.uploadProfile(input).subscribe(data=>{
      if(data["status"]){
        this.getProfile()
        this.snotify.success(data["message"], "Success")
       
      }else{
        this.snotify.warning(data["message"], "Warning")
      }
    }, err=> {
      this.snotify.error("Something Went to Wrong", "Error")
    })
  }

  

}
