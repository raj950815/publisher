import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  baseUrl=environment.baseUrl

  constructor(
   private http:HttpClient
  ) { }
   addRss(data:any):Observable<any> {
    return this.http.post(this.baseUrl+"save_rss_link",data)
  }
  listRss():Observable<any> {
    return this.http.get(this.baseUrl+"get_rss_links")
  }
  deleteRssLink(data:any):Observable<any> {
    return this.http.post(this.baseUrl+"delete_rss_link",data)
  }
}
