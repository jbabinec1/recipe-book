import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() public user: User[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}


interface User {

  ID: string; 
  FirstName: string;
  LastName: string;
  //Recipes: string;
  nameOfDish: string;
  ingredients: string;
  instructions: string;

}