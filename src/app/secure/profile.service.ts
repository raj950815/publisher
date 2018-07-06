import { Injectable, EventEmitter,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  baseUrl=environment.baseUrl

  constructor(private http:HttpClient) { }

  resetPassword(data:any): Observable <any> {
    return this.http.post(this.baseUrl+"set_password",data)
  }
  getProfileInfo(): Observable <any> {
    return this.http.get(this.baseUrl+"profile_details")
  }
  updateProfile(data:any):Observable<any>{
    this.change.emit(true);
    return this.http.post(this.baseUrl+"profile_update",data)
  }

  uploadProfilePicture(data:any):Observable<any>{
    this.change.emit(true);
    return this.http.post(this.baseUrl+"profile_pic_upload",data)
  }
}
