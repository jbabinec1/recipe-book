import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {User} from './User';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }




login(Login: Login) {
  return this.http.post('https://localhost:28520/api/contacts/Login', Login) 
  .subscribe((res: any) => {
    let showError = false;
    localStorage.setItem('access_token', res.token)
     localStorage.setItem('name', res.userName),
     
     error => {
      showError = true;
      console.log(error);
    }
   }) 
}


getToken() {
  return localStorage.getItem('access_token');
}

isLoggedIn():boolean {
  let authToken = localStorage.getItem('access_token');
  return (authToken !== null) ? true : false;
}


logout() {
  if (localStorage.removeItem('access_token') == null) {
    localStorage.clear();   
  }
}



registerUser(username:User): Observable<any> {  
  return this.http.post('https://localhost:28520/api/contacts/register', username).pipe(
    catchError(this.handleError)
)
}




handleError(error: HttpErrorResponse) {
  let msg = '';
  let showError = false;
  if (error.error instanceof ErrorEvent) {
    // client-side error
    msg = error.error.message;
    showError = true;
  } else {
    // server-side error
    msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(msg);
}






}






interface Login {

  Email: string;
  Password: string;
  
  }

