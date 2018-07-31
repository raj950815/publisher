import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl

  LoggedInStatus = false
  constructor(private http: HttpClient) { }
  // setLoggedIn(value: boolean) {
  //   this.LoggedInStatus = value
  // }

  // isLoggedIn() {
  //   return this.LoggedInStatus
  // }
  getToken() {
    return localStorage.getItem('userToken');
  }
  getKey() {
    return localStorage.getItem('key');
  } 
  forgotPasswordRequest(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'forgot_password', data)
  }
  getUserDetails(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'login', data)
  }

  registerUser(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'register', data)
  }

  passwordReset(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'reset_password', data)
  }

  mailConfirm(data: string): Observable<any> {
    return this.http.get(this.baseUrl + 'verify_email?h=' + data)
  }
}
