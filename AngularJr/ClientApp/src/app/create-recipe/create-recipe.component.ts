import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RecipeServiceService} from '../recipe-service.service'
import { Router } from '@angular/router';


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
  public response2: { dbPath2: 'http://localhost:5000/assets/guessIllDie.jpeg' }
  Image = './assets/guessIllDie.jpeg';
  defaultImg = 'http://localhost:5000/assets/guessIllDie.jpeg';

  public test = './assets/guessIllDie.jpeg';

  public guess = './Resources/Images/ipsum.png'

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private RecipeService: RecipeServiceService) { 

    this.createForm = this.fb.group({
      NameOfDish: '',
      Ingredients: '',
      Instructions: ''
      
      
    });

  }



    addRecipe(NameOfDish, Ingredients, Instructions, Image?) {

    
      let getHeaders = new HttpHeaders({'authorization': 'Bearer ' + localStorage.getItem('access_token')
    }); 

  
    let recipe = {
      NameOfDish: NameOfDish,
      Ingredients: Ingredients,
      Instructions: Instructions,
      Image: this.guess
    
      };

    //By default don't expect response for image ..
     
    
    
      if(this.response) {

          recipe = {
          NameOfDish: NameOfDish,
          Ingredients: Ingredients,
          Instructions: Instructions,
          Image: this.response.dbPath
            
  
      }
    }


    
  return this.http.post('https://localhost:28520/api/contacts/PostRecipe', recipe, {observe:'body', responseType: 'json', headers: getHeaders }).subscribe(
      (recipe: Recipes[]) => {
        this.recipes = recipe;
        this.router.navigateByUrl('/home', {replaceUrl: true})
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
  Image?: any;
  

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
