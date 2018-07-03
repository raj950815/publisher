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

  getProfileInfo(): Observable <any>{
    return this.http.get("http://192.168.2.34/publishers/profile/profile_info")
  }

  updateProfile(data:any):Observable<any>{
    return this.http.post("http://192.168.2.34/publishers/profile/update_profile",data)
  }

  uploadProfile(data:any):Observable<any>{
    return this.http.post("http://192.168.2.34/publishers/profile/upload_profile_pic",data)
  }
}
