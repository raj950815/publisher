import { Component, OnInit } from '@angular/core';
import { ButtonViewComponent } from '../button-view/button-view.component';
import { RssService } from './service/rss.service';
import { Title } from '../../../../node_modules/@angular/platform-browser';
import { Action } from '../../../../node_modules/rxjs/internal/scheduler/Action';

@Component({
  selector: 'rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.scss']
})
export class RssComponent implements OnInit {

  rssData: any


  constructor(
    private rss: RssService
  ) { }

  ngOnInit() {
    // this.getRssLinks()
  }

  // getRssLinks(){
  //   this.rss.rssLinks().subscribe(data=>{
  //     // console.log("res",data.response.status);
  //     this.rssData = data['response']
  //     // this.rssData['action'] = data.response['status']
  //     // console.log("ac",this.rssData['action']);
      
  //   })
  // }

}
