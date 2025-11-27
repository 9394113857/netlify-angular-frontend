// --------------------------------------------------------------
// CactivateGuard - Class-based Authentication Route Guard
// --------------------------------------------------------------
// Purpose:
// This guard protects specific routes (home, profile, etc.)
// by checking if the user is logged in using LoginService.
//
// Behavior:
// - If token exists → allow navigation
// - If token does NOT exist → block route + redirect to /login
//
// This uses Angular's older (class-based) guard pattern:
// "implements CanActivate"
// --------------------------------------------------------------

import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  UrlTree, 
  Router 
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'  // Makes this guard available across the entire app
})
export class cactivateGuard implements CanActivate {

  // --------------------------------------------------------------
  // Inject LoginService for auth status
  // Inject Router for redirecting to /login
  // --------------------------------------------------------------
  constructor(private loginService: LoginService, private router: Router) {}

  // --------------------------------------------------------------
  // canActivate() → This method decides if route can be accessed
  // --------------------------------------------------------------
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
  {

    // --------------------------------------------------------------
    // 1. Check if user is logged in using LoginService
    // --------------------------------------------------------------
    if (!this.loginService.isLoggedIn()) {

      // User NOT logged in → block route
      alert("Please enter credentials to login.");

      // Redirect to login page
      this.router.navigate(["/login"]);

      return false;
    }

    // --------------------------------------------------------------
    // 2. User IS logged in → allow route access
    // --------------------------------------------------------------
    return true;
  }

}
