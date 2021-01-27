import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-recipe-container',
  templateUrl: './recipe-container.component.html',
  styleUrls: ['./recipe-container.component.css']
})
export class RecipeContainerComponent {

  public user: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {


    this.http.get<User[]>('https://localhost:28520/api/contacts/GetAll').subscribe(result => {
   this.user = result;
     }, error => console.error(error)); 

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

}