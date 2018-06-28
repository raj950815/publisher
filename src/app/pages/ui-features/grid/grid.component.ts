import { Component } from '@angular/core';
import { ContentService } from '../../content.service';
import {  SnotifyService } from 'ng-snotify';

@Component({
  selector: 'ngx-grid',
  styleUrls: ['./grid.component.scss'],
  templateUrl: './grid.component.html',
})
export class GridComponent {
constructor(
  private content:ContentService,
  private snotify:SnotifyService
){}
ngOnInit(){
  this.getFeedLinks()
}
model:any={};
onSubmit(){
  this.content.addRss(this.model).subscribe(data=>{
    if (data["status"]) {
      this.model={
        feed_link:" "
      }
      this.getFeedLinks();
      this.snotify.success(data["message"],"Success")
    } else {
      this.snotify.warning(data["message"],"Warning")
      
    }
  },err=>{
    this.snotify.error("Something went wrong","failure")
  })
}
listRss=[]
getFeedLinks(){
  this.content.listRss().subscribe(
    data=>{
      if (data["status"]) {
       this.listRss=data["response"]
      } else {
        this.snotify.warning(data["message"],"Warning")
      }
    },err=>{
      this.snotify.error("Something went wrong","failure")
    }
  )
}
deleteLink(linkId){
  let data={
    "link_id":linkId
  }

this.content.deleteRssLink(data).subscribe(data=>{
if (data["status"]) {
  this.getFeedLinks()
  this.snotify.success(data["message"],"Success")
} else {
  this.snotify.warning(data["message"],"Warning")
}
},err=>{
  this.snotify.error("Something went wrong","failure")
})

}
}
