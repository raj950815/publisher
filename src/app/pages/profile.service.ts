import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  resetPassword(data:any): Observable <any> {
    return this.http.post("http://192.168.2.34/publishers/profile/set_new_password",data)
  }
}
