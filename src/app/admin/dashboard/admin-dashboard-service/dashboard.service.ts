import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  getStoryCards(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'admin/recent_stories', data)
  }

  changeStatus(data: any): Observable <any> {
    this.change.emit(true);
    return this.http.post(this.baseUrl + 'admin/approve_reject_story', data)
  }

  statsCards(): Observable <any> {
    return this.http.get(this.baseUrl + 'admin/total_stats')
  }
}
