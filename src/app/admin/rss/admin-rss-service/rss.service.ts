import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RssService {
  baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  rssLinks(data: any): Observable <any> {
    return this.http.post(this.baseUrl + 'admin/rss_links', data)
  }

  ChangeRssStatus(data: any): Observable <any> {
    return this.http.post(this.baseUrl + 'admin/approve_reject_rsslink', data)
  }
}
