import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
constructor(private auth:AuthService){}

ngOnInit() {  
  console.log("dashboard",this.auth.getauthenticatedUserId())
  this.auth.getauthenticatedUserId().subscribe(data=>{
    console.log("das",data);  
  })

}
  values = [{
    'image': '1',
    'title': '10 Times Sonam Kapoor was the Best at Everything',
    'likes': '1B',
    'dislikes': '1K',
    'comment':'26M',
    'shares':'2k',
    'preview':'1k',
  },
  {
    'image': '2',
    'title': "PM Narendra Modi's 'Assassination Plan' in Letter Found .....",
    'likes': '1M',
    'dislikes': '1.2K',
    'comment':'6M',
    'shares':'22k',
    'preview':'1k',
  },
  {
    'image': '3',
    'title': 'If You Are a Language Expert, Try Scoring 7/10 In This Phrase Quiz ',
    'likes': '1K',
    'dislikes': '10',
    'comment':'896',
    'shares':'200',
    'preview':'1.2k',
  },
  {
    'image': '4',
    'title': "Yahoo Messenger Shuts Down for Good after a 'Glorious' Run of 20 Years",
    'likes': '10B',
    'dislikes': '10K',
    'comment':'26M',
    'shares':'2.1k',
    'preview':'10k',
  },{
    'image': '1',
    'title': '10 Times Sonam Kapoor was the Best at Everything',
    'likes': '1B',
    'dislikes': '1K',
    'comment':'26M',
    'shares':'2k',
    'preview':'1k',
  },
  {
    'image': '2',
    'title': "PM Narendra Modi's 'Assassination Plan' in Letter Found .....",
    'likes': '1M',
    'dislikes': '1.2K',
    'comment':'6M',
    'shares':'22k',
    'preview':'1k',
  },
  {
    'image': '3',
    'title': 'If You Are a Language Expert, Try Scoring 7/10 In This Phrase Quiz ',
    'likes': '1K',
    'dislikes': '10',
    'comment':'896',
    'shares':'200',
    'preview':'1.2k',
  },
  {
    'image': '4',
    'title': "Yahoo Messenger Shuts Down for Good after a 'Glorious' Run of 20 Years",
    'likes': '10B',
    'dislikes': '10K',
    'comment':'26M',
    'shares':'2.1k',
    'preview':'10k',
  },{
    'image': '1',
    'title': '10 Times Sonam Kapoor was the Best at Everything',
    'likes': '1B',
    'dislikes': '1K',
    'comment':'26M',
    'shares':'2k',
    'preview':'1k',
  },
  {
    'image': '2',
    'title': "PM Narendra Modi's 'Assassination Plan' in Letter Found .....",
    'likes': '1M',
    'dislikes': '1.2K',
    'comment':'6M',
    'shares':'22k',
    'preview':'1k',
  },
  {
    'image': '3',
    'title': 'If You Are a Language Expert, Try Scoring 7/10 In This Phrase Quiz ',
    'likes': '1K',
    'dislikes': '10',
    'comment':'896',
    'shares':'200',
    'preview':'1.2k',
  },
  {
    'image': '4',
    'title': "Yahoo Messenger Shuts Down for Good after a 'Glorious' Run of 20 Years",
    'likes': '10B',
    'dislikes': '10K',
    'comment':'26M',
    'shares':'2.1k',
    'preview':'10k',
  },
  ];

}
