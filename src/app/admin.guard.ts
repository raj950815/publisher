import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const role = this.auth.getKey()
      const token = this.auth.getToken()
      if (role === 'benjo' && !!token) {
        return true
      } else {
        // this.auth.setLoggedIn(false)
        this.router.navigate(['/'])
        return false
      }
  }
}
