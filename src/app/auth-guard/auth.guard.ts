import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const token = this.auth.getToken()
      const role = this.auth.getKey()
    if (role === 'qvcmjtifs' && !!token) {
      return true
    } else {
      this.auth.setLoggedIn(false)
      this.router.navigate(['login']);
      return false
    }
  }
}
