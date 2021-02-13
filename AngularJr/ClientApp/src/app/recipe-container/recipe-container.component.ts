import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-recipe-container',
  templateUrl: './recipe-container.component.html',
  styleUrls: ['./recipe-container.component.css']
})
export class RecipeContainerComponent {

 // public user: User[] = [];
  public response: { dbPath: '' }
 @Input() public user: User[] = [];
 @Output() public sendData = new EventEmitter(); //Send data to home

  constructor(private http: HttpClient) { }

  ngOnInit() {



  }

  public uploadFinished = (event) => {

    this.response = event;

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