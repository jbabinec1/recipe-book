import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail-select',
  templateUrl: './recipe-detail-select.component.html',
  styleUrls: ['./recipe-detail-select.component.css']
})
export class RecipeDetailSelectComponent implements OnInit {

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
  NameOfDish: string;
  //Ingredients: string;
  //Instructions: string;
  image: string;

}
