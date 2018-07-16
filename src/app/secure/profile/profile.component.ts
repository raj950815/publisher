import { Component, OnInit } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  profileData: any
  model: any = {}
  profileInfo: any
  form: FormGroup
  userfile: null
  pubisherImg
  message

  snotifyConfig = {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  }

  pubisherImgUrl = 'https://s3.amazonaws.com/one-feed/publisher/profile/'
  constructor(
    private profile: ProfileService,
    private snotify: SnotifyService,
    private fb: FormBuilder,
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
        if (this.model.profile_image === '') {
          // this.pubisherImg = this.publisherDefaultIcon
          this.pubisherImg=''
        } else {
          this.pubisherImg = this.pubisherImgUrl + this.model.profile_image
        }
      },
    )
  }

  updateSubmit() {
    this.profile.updateProfile(this.model).subscribe(data => {
      if (data['status']) {
        this.profile.change.emit(true)
        this.snotify.success(data['message'], 'Success', this.snotifyConfig)
      } else {
        this.snotify.warning(data['message'], 'Warning', this.snotifyConfig)
      }
    }, err => {
      this.snotify.error('Something Went to Wrong', 'Error', this.snotifyConfig)
    })
  }

  createForm() {
    this.form = this.fb.group({
      userfile: [null, Validators.required],
    })
  }

  onFileChange(event) {
    const file = event.target.files[0]
    if (file.size > 1024 * 1024) {
      this.snotify.warning('File Size Must be less than 1MB', 'Warning', this.snotifyConfig)
      event.stopPropagation();
    } else {
      this.form.get('userfile').setValue(file)
    }
  }

  onUpload() {
    const input = new FormData();
    input.append('userfile', this.form.get('userfile').value);

    this.profile.uploadProfilePicture(input).subscribe(data => {
      if (data['status']) {
        this.getProfile()
        this.profile.change.emit(true)

        this.snotify.success(data['message'], 'Success', this.snotifyConfig)

      } else {
        this.snotify.warning(data['message'], 'Warning', this.snotifyConfig)
      }
    }, err => {
      this.snotify.error('Something Went to Wrong', 'Error', this.snotifyConfig)
    })
  }

}
