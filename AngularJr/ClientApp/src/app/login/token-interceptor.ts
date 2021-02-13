import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpResponse} from '@angular/common/http';
import {HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

import { throwError } from "rxjs";
import {Router} from "@angular/router";
import { empty, of } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    [x: string]: any;
    

constructor (private router: Router, private authService: AuthenticationService) {}

intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

if(this.authService.getToken){
    
    const authReq = req.clone({
        headers: req.headers.set(
            'Authorization', this.authService.getToken()
        )
    });
    req = authReq;
};


    return next.handle(req)
     //.pipe(
    //tap(event => this.handleResponse(req, event),
    //error => this.handleError(req, error)));

}





}