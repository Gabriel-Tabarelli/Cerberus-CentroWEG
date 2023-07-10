import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { UserStatusService } from '../services/user-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private userStatus: UserStatusService, private route: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userStatus.userLoggedIn$.pipe(
      take(1),
      map(loggedIn => {
        if (loggedIn) {
          return true;
        } else {
          this.route.navigate(['/signin-page'], { queryParams: { returnUrl: state.url}}); 
          return false; 
        }
      })
    );
  }
  
}
