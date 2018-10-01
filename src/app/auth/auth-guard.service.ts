import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.user){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
