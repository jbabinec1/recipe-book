import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CreateGuard implements CanActivate {

  constructor( public authService: AuthenticationService,
    public router: Router){}
    
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if(this.authService.isLoggedIn() !== true) {
        // window.alert("Please log in!")
         this.router.navigate(['/Login'])
       } 

    return true;
  }
  
}
