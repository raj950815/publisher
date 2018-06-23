import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  LoggedInStatus=false
  constructor(private http:HttpClient) { }
    setLoggedIn(value:boolean){
       this.LoggedInStatus=value
    }

   isLoggedIn() {
    return this.LoggedInStatus
  }
  getToken(){
    return localStorage.getItem("userToken"); 
  }
getauthenticatedUserId(){
  return this.http.get<any>("http://192.168.2.74/restapi/Api")
}
  fogetPasswordRequest(email):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
  let  data={
      "email":email
  }
  console.log("data",data);
  
  return this.http.post("http://192.168.2.74/restapi/auth/forget", data, httpOptions)
}




  getUserDetails(email, password):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      
    let  data={
        "email":email,
        "password":password
    }
    console.log("data",data);
    
    return this.http.post("http://192.168.2.74/restapi/Register/login", data, httpOptions)
  }
}
