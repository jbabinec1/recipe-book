import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RecipeServiceService} from '../recipe-service.service'


@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})



export class CreateRecipeComponent {


  @Output() public uploadDone = new EventEmitter(); //Broadcasts upload completion to Recipe Container
  @Input() public user: User[] = [];
  createForm: FormGroup;
  recipes: Recipes[];
  public response: { dbPath: '' }
  Image: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private RecipeService: RecipeServiceService) { 

    this.createForm = this.fb.group({
      NameOfDish: '',
      Ingredients: '',
      Instructions: '',
      
    });

  }


/*
    addRecipe(NameOfDish, Ingredients, Instructions) {
    this.RecipeService.addRecipe(NameOfDish, Ingredients, Instructions).subscribe(
      (recipe: Recipes[]) => {
        this.recipes = recipe;
        console.log(recipe);
      }
    )

    } */




    addRecipe(NameOfDish, Ingredients, Instructions) {


      let getHeaders = new HttpHeaders({'Accept': 'application/vnd.api+json', 'Cache-Control': 'no-cache', 'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzBlOGM1Yy03ZDc4LTQ1YjgtOWJjYy0yNzJkZWE3NjRkMjkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjYwMThkMTVjOTkzNTdiYjBlNjMyNGU5MCIsImV4cCI6MTYxNDgzMTE5NywiaXNzIjoiSmFyZWQiLCJhdWQiOiJKYXJlZCJ9.tt6wgA0FE_dfhU_3ejV6Uosdg2xQFMaNS_wVgW5KqmA',
      "accept": 'application/vnd.api+json'}); 


      const recipe = {
      NameOfDish: NameOfDish,
      Ingredients: Ingredients,
      Instructions: Instructions,
      Image: this.response.dbPath
      
      };

    return this.http.post('https://localhost:28520/api/contacts/PostRecipe', recipe, {observe:'body', responseType: 'json', headers: getHeaders }).subscribe(
      (recipe: Recipes[]) => {
        this.recipes = recipe;
        console.log(recipe);
      }
    ) 
  
      }   





    public uploadFinished = (event) => {

      this.response = event;

    }


    public createImgPath = (serverPath: string) => {

      return `https://localhost:28520/${serverPath}`;

    }
      

  ngOnInit() {
  }






}



interface Recipes {

  NameOfDish: string;
  Ingredients: string;
  Instructions: string;
  Image: string;
  

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
