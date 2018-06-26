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
  return this.http.get<any>("http://192.168.2.34/publishers/Api")
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
  
  return this.http.post("http://192.168.2.34/publishers/login/forgot_password", data, httpOptions)
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
    
    return this.http.post("http://192.168.2.34/publishers/login/login_publisher", data, httpOptions)
  }

  registerUser(data:FormData){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'multipart/form-data'
      })
    };

    // let data = {
    //   "publisher_name":publisher,
    //   "email":email,
    //   "url":url,
    //   "password":password
    // }
    console.log(data);
    
    return this.http.post("http://192.168.2.34/publishers/login/register",data)
  }

  verify(password:any,token:any){
    let data:any={
      "password":password,
      // "id":id,
      "rt":token
    }
    console.log(data);
    
    return this.http.post("http://192.168.2.34/publishers/login/reset",data)
  }

  resetpassword(password, token){
    let data={
      "password":password,
      "token":token
    }
    console.log(data)
    return this.http.post("http://192.168.2.34/publishers/login/set_new_password",data)
  }
}
