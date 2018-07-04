import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
   private http:HttpClient
  ) { }
   addRss(data:any):Observable<any> {
    return this.http.post("http://192.168.2.34/publishers/content/save_rss_link",data)
  }
  listRss():Observable<any> {
    return this.http.get("http://192.168.2.34/publishers/content/get_rss_links")
  }
  deleteRssLink(data:any):Observable<any> {
    return this.http.post("http://192.168.2.34/publishers/content/delete_rss_link",data)
  }
}
