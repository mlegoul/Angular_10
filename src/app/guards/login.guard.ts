import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable,} from 'rxjs';
import {AuthService} from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {


  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let result = this.authService.isLogged();

    if (!result) {
      this.router.navigate(['/login']);
      return false;
    } else {
      this.router.navigate(['/']);
      return true;
    }

  }
}
