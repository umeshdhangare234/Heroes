import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true|UrlTree {
      const url:string = state.url;
      return this.checkLogin(url);
  }

  canActivateChild( 
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):true|UrlTree{
      return this.canActivate(route,state);
    }

  checkLogin(url:string):true|UrlTree{
    if (this.authService.isLoggedIn) {return true;}

    this.authService.redirectUrl = url;

    return this.router.parseUrl('/login');
  }

  canLoad(route:Route){
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }
  
}
