import { Component, OnDestroy,ViewChild } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'ngx-chartjs-pie',
  template: `
    <chart type="pie" [data]="data" [options]="options" *ngIf="dataStatus==true"></chart>
    <div class="no-data-available" *ngIf="dataStatus==false">
       No Data Available
    </div>
  `,
  styleUrls:['./chartjs.component.scss'],
})
export class ChartjsPieComponent implements OnDestroy {
  // data: any;
  // options: any;
  dataStatus:boolean=false
  themeSubscription: any;
  
  constructor(private theme: NbThemeService,
  private analyticsService:AnalyticsService
  ) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      
    });
  }
  data = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: ["#67b7dc","#fdd400","#84b761","#cc4748","#cd82ad","#2f4074","#448e4d","#b7b83f"],
  }],
};

options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: false,
      },
    ],
  },
  legend: {
    position: 'bottom',
    labels: {
      fontColor: "grey",   
    },
  },
};
  ngOnInit(){
    this.getCountrywiseUniqueVistors()
}
getCountrywiseUniqueVistors(){
   
  this.analyticsService.countryWiseUniqueVisitors().subscribe(data=>{
    // console.log("data",data);
    // debugger
    if (data["status"]) {
      this.dataStatus=true
      let response=data["response"]
      let unique_count=[]
      let labels=[]
     
      Object.keys(response).forEach(key=>{
       response[key]["unique_count"]?unique_count.push(response[key]["unique_count"]):unique_count.push(0)
       labels.push(key)
      })

      this.data.datasets[0].data=unique_count
      this.data.labels=labels
      
      // debugger
    } else {
      this.dataStatus=false
    }
  },err=>{

  })
}

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
