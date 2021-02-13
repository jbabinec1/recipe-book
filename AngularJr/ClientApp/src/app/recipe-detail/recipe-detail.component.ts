import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RecipeServiceService} from '../recipe-service.service';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'; 

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent  {

  @Input() public user: User;
  @Input() id: String;
  @Input() public recipe: Recipe;
  //@Input() public recipe: User[] = [];

  constructor(private route: ActivatedRoute, private recipeService: RecipeServiceService) { }

  ngOnInit() {

  this.route.params.subscribe(params => {
      this.id = params.id;
     //this.fetchUser(this.id);      
    })  

    this.fetchUser();   
    

  }



  fetchUser() {
    this.recipeService.getUser()
    
/* .pipe(
    
    filter(item => item['recipes'].id === id),
    map(items => items)
  ) */
      
    .subscribe((user: User) => {
      this.user = user; 
      console.log(user);
    }) 
  }





  fetchRecipe(id) {
   this.recipeService.getRecipe(id).subscribe((recipe: Recipe) => {
    this.recipe = recipe; 
    console.log(recipe);
  }) 
  }




}


interface User {

  ID: string; 
  FirstName: string;
  LastName: string;
  recipes: string[];
  NameOfDish: string;
  //Ingredients: string;
  //Instructions: string;
  image: string;

}


interface Recipe {

  
  NameOfDish: string;
  Ingredients: string;
  Instructions: string;
  image: string;

}