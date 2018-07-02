import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http:HttpClient
  ) { }
  getStoryCards(): Observable<any>{
    console.log("data")
    let data={}
    return this.http.post("http://192.168.2.34/publishers/content/stories",data)
  }
}
