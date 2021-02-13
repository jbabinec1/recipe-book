import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() public user: User[] = [];
  image: string;

 // @Input() public userx: User[] = [];
  
  constructor(private router: Router) { }

  public response: {dbPath: ''}



  public uploadFinished = (event) => {

    this.response = event;

  }


  public createImgPath = (serverPath: string) => {

    return `https://localhost:28520/${serverPath}`;

  }



  detailsRecipe(id) {
    this.router.navigate([`RecipeDetail/${id}`]); 
  }

  

  ngOnInit() {
  
    //this.createImgPath(this.user.image);

    //this.image = `url(${https://localhost:28520/${serverPath})`;

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