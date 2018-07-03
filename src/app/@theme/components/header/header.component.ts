import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { ProfileService } from '../../../pages/profile.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;
  profileInfo:any
  pubisherImg

  publisherDefaultIcon='../../../../../assets/images/user.png'
  pubisherImgUrl='https://s3.amazonaws.com/one-feed/publisher/profile/'

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private analyticsService: AnalyticsService,
              private profile: ProfileService
            ) {
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    this.profile.getProfileInfo().subscribe(data=>{
      this.profileInfo=data["response"]
      if(this.profileInfo.profile_image==""){
        this.pubisherImg=this.publisherDefaultIcon
      }else{
        this.pubisherImg=this.pubisherImgUrl+this.profileInfo.profile_image
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

  startSearch() {
    // this.analyticsService.trackEvent('startSearch');
  }
}
