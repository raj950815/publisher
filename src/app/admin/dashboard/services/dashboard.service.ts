import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }
  getStoryCards(): Observable<any> {
    const data = {}
    return this.http.post(this.baseUrl + 'fetch_stories', data)
  }
}
