import { Component, OnInit, Input } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: FormGroup;
  buttonClicked = false;
   showError = false;
  //success = false;
  @Input() public user: User[] = [];

  constructor(private formbuilder: FormBuilder, private authService: AuthenticationService, private router: Router) { 

    this.loginUser = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


 login() {
  
  this.authService.login(this.loginUser.value)
  this.showError = false;
 //Wait 5 seconds before routing to home .. show error message if login failed
  setTimeout(() => {
    this.router.navigate(['home'])
    this.showError = true;
    this.buttonClicked = false;
  }
  , 2100);

  this.buttonClicked = true;
    
 }  

 


 isLoggedIn():boolean {
  let authToken = localStorage.getItem('access_token');
  return (authToken !== null) ? true : false;
}




isName() {
  return localStorage.getItem('name') === null
 }




  ngOnInit() {
  }

}


interface User {

  ID: string; 
  FirstName: string;
  LastName: string;
  //Recipes: string;
  NameOfDish: string;
  //Ingredients: string;
  //Instructions: string;
  image: string;

}