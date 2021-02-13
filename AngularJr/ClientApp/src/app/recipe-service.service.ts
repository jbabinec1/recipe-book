import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  public response: {dbPath: ''}

  constructor(private http: HttpClient) { }



  addRecipe(NameOfDish, Ingredients, Instructions) {

  
      let getHeaders = new HttpHeaders({'Accept': 'application/vnd.api+json', 'Cache-Control': 'no-cache', 'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzBlOGM1Yy03ZDc4LTQ1YjgtOWJjYy0yNzJkZWE3NjRkMjkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjYwMThkMTVjOTkzNTdiYjBlNjMyNGU5MCIsImV4cCI6MTYxNDgzMTE5NywiaXNzIjoiSmFyZWQiLCJhdWQiOiJKYXJlZCJ9.tt6wgA0FE_dfhU_3ejV6Uosdg2xQFMaNS_wVgW5KqmA',
      "accept": 'application/vnd.api+json'}); 


      const recipe = {
      NameOfDish: NameOfDish,
      Ingredients: Ingredients,
      Instructions: Instructions,
      imgPath: this.response.dbPath
      
      };
    return this.http.post('https://localhost:28520/api/contacts/PostRecipe', recipe, {observe:'body', responseType: 'json', headers: getHeaders });   
  }

  


  getRecipe(id) {

  /*  let getHeaders = new HttpHeaders({'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzBlOGM1Yy03ZDc4LTQ1YjgtOWJjYy0yNzJkZWE3NjRkMjkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjYwMThkMTVjOTkzNTdiYjBlNjMyNGU5MCIsImV4cCI6MTYxNDgzMTE5NywiaXNzIjoiSmFyZWQiLCJhdWQiOiJKYXJlZCJ9.tt6wgA0FE_dfhU_3ejV6Uosdg2xQFMaNS_wVgW5KqmA'
  }); */
return this.http.get(`https://localhost:28520/api/contacts/GetRecipe/${id}`);  

  }




isLoggedIn():boolean {
  let authToken = localStorage.getItem('access_token');
  return (authToken !== null) ? true : false;
}


//Token for test@login.com aka Bilbo Baggins
//token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1Y2FkZGRkNy05OTcxLTRiOTAtYjBjNy0zMDgwMmZiZTEyMWQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjYwMThkMTVjOTkzNTdiYjBlNjMyNGU5MCIsImV4cCI6MTYxNTA1NjE1MCwiaXNzIjoiSmFyZWQiLCJhdWQiOiJKYXJlZCJ9.GYcpr9s34qtuHc9mb8BLGC4gUFCNfPNMZS5N-55TVDQ'


 //localStorage.getItem('access_token')


  getUser() {

    let getHeaders = new HttpHeaders({'authorization': 'Bearer '+localStorage.getItem('access_token')
    }); 

  return this.http.get('https://localhost:28520/api/contacts/GetOne',  { headers: getHeaders });   
}








}


interface User {

  ID: string; 
  FirstName: string;
  LastName: string;
  Recipes: string;
  NameOfDish: string;
  //Ingredients: string;
  //Instructions: string;

}