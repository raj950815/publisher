import { Component, Input, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth-service/auth.service';
import { ProfileService } from '../../../secure/profile/profile-service/profile.service';


@Component({
  selector: 'pub-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;
  profileInfo: any
  pubisherImg
  key: any
  homeLink: any
  defaultImg = '../assets/images/default.png'
  pubisherImgUrl = 'https://s3.amazonaws.com/one-feed/publisher/profile/'


  constructor(
    private sidebarService: NbSidebarService,
    private profile: ProfileService,
    private auth: AuthService,
    private router: Router,

  ) {
    document.addEventListener('click', this.offClickHandler.bind(this));
  }

  ngOnInit() {
    this.profile.change.subscribe(change => {
    this.getProfile()

    })
    this.getProfile()
    this.getRole()
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
        this.pubisherImg = this.defaultImg
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

  getRole() {
    this.key = this.auth.getKey();
    if (this.key === 'qvcmjtifs') {
      this.homeLink = '#'
    } else {
      this.homeLink = '#/admin'
    }
  }

  // startSearch() {
  //   // this.analyticsService.trackEvent('startSearch');
  // }
}
