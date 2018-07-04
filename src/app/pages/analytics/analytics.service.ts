import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(
    private http:HttpClient
  ) { }
  storyStatus():Observable <any>{
    let data={

    }
    return this.http.post("http://192.168.2.34/publishers/analytics/stories_status",data)
  }
  countryWiseUniqueVisitors():Observable <any>{
    let data={

    }
    return this.http.post("http://192.168.2.34/publishers/analytics/country_wise_stats",data)
  }

  collectiveEarning():Observable <any>{
    let data={

    }
    return this.http.post("http://192.168.2.34/publishers/analytics/collective_earning",data)
  }
}
