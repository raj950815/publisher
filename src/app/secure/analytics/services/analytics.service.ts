import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }
  storyStatus(): Observable <any> {
    const data = {

    }
    return this.http.post(this.baseUrl + 'stories_status', data)
  }
  countryWiseUniqueVisitors(): Observable <any> {
    const data = {

    }
    return this.http.post(this.baseUrl + 'country_wise_stats', data)
  }

  collectiveEarning(): Observable <any> {
    const data = {

    }
    return this.http.post(this.baseUrl + 'collective_earning', data)
  }
  monthlystats(): Observable <any> {
    const data = {

    }
    return this.http.post(this.baseUrl + 'monthly_counts', data)
  }
  updateTrack(data:any): Observable <any> {
    return this.http.post(this.baseUrl + '', data)
  }
}
