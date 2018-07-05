import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { ProfileService } from '../../../secure/profile.service';
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

  publisherDefaultIcon = '../../../../../assets/images/user.png'
  pubisherImgUrl = 'https://s3.amazonaws.com/one-feed/publisher/profile/'
 

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private profile: ProfileService,
    private router: Router,

  ) {
    document.addEventListener('click', this.offClickHandler.bind(this));
  }

  ngOnInit() {
    this.getProfile()
  }


  menushow: boolean = false
  offClickHandler(a: any) {
        a.target.id=="name"||  a.target.id=="picture" ? this.menushow=!this.menushow : this.menushow=false
  }
  logout() {
    localStorage.removeItem("userToken");
    this.router.navigate(['login'])
    console.log("logout");
  }
  profileNavigate() {
    this.menushow ? this.menushow = false : this.menushow = true
    this.router.navigate(['pages/profile'])
  }

  getProfile() {
    this.profile.getProfileInfo().subscribe(data => {
      this.profileInfo = data["response"]
      if (this.profileInfo.profile_image == "") {
        this.pubisherImg = this.publisherDefaultIcon
      } else {
        this.pubisherImg = this.pubisherImgUrl + this.profileInfo.profile_image
      }
    })
  }
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }



  goToHome() {
    this.menuService.navigateHome();
  }

  // startSearch() {
  //   // this.analyticsService.trackEvent('startSearch');
  // }
}
