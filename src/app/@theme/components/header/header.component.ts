import { Component, Input, OnInit } from '@angular/core';

import { NbSidebarService } from '@nebular/theme';
import { ProfileService } from '../../../secure/profile/services/profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;
  profileInfo: any
  pubisherImg

  pubisherImgUrl = 'https://s3.amazonaws.com/one-feed/publisher/profile/'


  constructor(private sidebarService: NbSidebarService,
    private profile: ProfileService,
    private router: Router,

  ) {
    document.addEventListener('click', this.offClickHandler.bind(this));
  }

  ngOnInit() {
    this.profile.change.subscribe(change => {
    this.getProfile()

    })
    this.getProfile()
  }


  menushow: boolean = false
  offClickHandler(a: any) {
        a.target.id === 'name' ||  a.target.id === 'picture' ? this.menushow = !this.menushow : this.menushow = false
  }
  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['login'])
  }
  profileNavigate() {
    this.menushow ? this.menushow = false : this.menushow = true
    this.router.navigate(['profile'])
  }

  getProfile() {
    this.profile.getProfileInfo().subscribe(data => {
      this.profileInfo = data['response']
      if (this.profileInfo.profile_image === '') {
        this.pubisherImg = ''
      } else {
        this.pubisherImg = this.pubisherImgUrl + this.profileInfo.profile_image
      }
    })
  }
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
    // return true
  }



  goToHome() {
    this.router.navigate(['/']);
  }

  // startSearch() {
  //   // this.analyticsService.trackEvent('startSearch');
  // }
}
