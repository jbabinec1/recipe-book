import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RecipeServiceService} from '../recipe-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  contacts: Contact[] = [];
  @Input() public user: User[] = [];

 // @Input() public user: User = [];
  
  public ID: [];

  
  constructor(private http: HttpClient, private recipeService: RecipeServiceService) { }

  


  ngOnInit() {


    /*
    this.http.get<User[]>('https://localhost:28520/api/contacts/GetAll').subscribe(result => {
      this.user = result;
        }, error => console.error(error));  */


        this.recipeService.getUser().subscribe((user: User[]) => {
          this.user = user; 
          console.log(user);
        }) 


  /*    
  this.getUser().subscribe((user: User[]) => {
    this.user = user; 
    console.log(user);
  }) */
      


    
  }




  getUser() {

    let getHeaders = new HttpHeaders({'authorization': 'Bearer ' + localStorage.getItem('access_token')
    }); 

  return this.http.get('https://localhost:28520/api/contacts/GetOne',  { headers: getHeaders });   
}




 




}

  
interface Contact {  
  FirstName: "Boop";  
  LastName: string;  
  EmailAddresseses: Array<string>;  
  EmailAddress: string;
  Provider: string,
  ID: string;  
  Providers: Array<string>;
  ProviderName: string;
  Current: string;
  
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

