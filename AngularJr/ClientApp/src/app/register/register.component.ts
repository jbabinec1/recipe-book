import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticationService} from '../authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router, private authService: AuthenticationService) {

    this.registerUser = this.formbuilder.group({
      email: ['', Validators.required],
      password: '',
      ConfirmPassword: '',
      FirstName: '',
      LastName: ''
      
    });

   }


  
   addUser() {
    this.authService.registerUser(this.registerUser.value).subscribe((user: any) => {
      //this.router.navigate(['/list']);
      localStorage.setItem('name', user.data.user.name)
      console.log('User added!');
       
    });
  }




  ngOnInit() {
  }

}
