import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { _throw } from 'rxjs/observable/throw';
import 'rxjs/add/operator/catch';
import { Router } from "@angular/router";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth:AuthService,private route:Router) { }

    intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
        var token= this.auth.getToken()
        console.log("token ",token)
        if(!!token){
            req=req.clone({
                setHeaders: {
                    Authorization: token                 
                }
            });         
        }
        return next.handle(req).catch(errorResponse => {
            if (errorResponse.status==401 || errorResponse.status==403) {
                this.route.navigate(['/login'])
            }
             return _throw(errorResponse.message);
        }

        );
    }
}