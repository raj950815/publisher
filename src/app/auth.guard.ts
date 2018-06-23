import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let token=this.auth.getToken()
    if (!!token) {
      // console.log("if",this.auth.isLoggedIn())
      return true
    }else{
      // console.log("else",this.auth.isLoggedIn())
      this.auth.setLoggedIn(false)
      this.router.navigate(['login']);
      return false
    }
  }
}
