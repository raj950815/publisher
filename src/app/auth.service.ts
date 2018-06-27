import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  LoggedInStatus = false
  constructor(private http: HttpClient) { }
  setLoggedIn(value: boolean) {
    this.LoggedInStatus = value
  }

  isLoggedIn() {
    return this.LoggedInStatus
  }
  getToken() {
    return localStorage.getItem("userToken");
  }
  getauthenticatedUserId() {
    return this.http.get<any>("http://192.168.2.34/publishers/Api")
  }
  fogetPasswordRequest(data: any): Observable<any> {
    return this.http.post("http://192.168.2.34/publishers/login/forgot_password", data)
  }
  getUserDetails(logData: any): Observable<any> {
    return this.http.post("http://192.168.2.34/publishers/login/login_publisher", logData)
  }

  registerUser(data: any): Observable<any> {
    return this.http.post("http://192.168.2.34/publishers/login/register", data)
  }
  
  passwordReset(data:any): Observable<any> {
    return this.http.post("http://192.168.2.34/publishers/login/reset", data)
  }
  mailConfirm(data:string):Observable<any> {
    return this.http.get("http://192.168.2.34/publishers/login/verify_email?h="+data)
  }
}
