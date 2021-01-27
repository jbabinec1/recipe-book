import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  contacts: Contact[] = [];
  user: User[] = [];
 

  headers = { 'content-type': 'application/json' }
  constructor(private http: HttpClient) { }

  /* this.http.get<Contact[]>(/).subscribe(result => {
      this.contacts = result;
    }, error => console.error(error)); */


  /*   this.http.get<Contact[]>('').subscribe(result => {
  this.contacts = result;
    }, error => console.error(error)); */


  /*  this.http.post<Contact[]>('', { observe: 'body', responseType: 'json', headers: getHeaders }).subscribe(result => {
      this.contacts = result;
    }, error => console.error(error));
  */



  ngOnInit() {

    // let getHeaders = new HttpHeaders({'Accept': 'application/vnd.api+json'}); 

    //const headers: HttpHeaders = new  HttpHeaders();
    //headers.set('Content-Type', 'application/x-www-form-urlencoded');
    /* const contact = {
     
   "FirstName":"MERP merp", 
   "LastName":"MERPP",
   "EmailAddress":"HI",
   "ID":"SDSDSD"  
 
     }; */   /*  this.http.post<Contact[]>('', { observe: 'body', responseType: 'json', headers: getHeaders }).subscribe(result => {
      this.contacts = result;
    }, error => console.error(error));
  */

 //let EmailAddresses = {EmailAddress: 'Meh@meh.com'}; 
/*
    this.http.post<User[]>('https://localhost:28520/api/contacts/', {FirstName: 'Jared', LastName:'BabinecBabinec',  Recipes: [  {NameOfDish:'Lentil chili', Ingredients:'Need to figure out', Instructions: 'Ask Jinny'}, {NameOfDish:'Sum dish', Ingredients:'Need to figure out', Instructions: 'Ask urself'}  ]}, { headers: headers }).subscribe(result => {
   this.user = result;
 }, error => console.error(error)); */



/*
    this.http.get<User[]>('https://localhost:28520/api/contacts/').subscribe(result => {
   this.user = result;
     }, error => console.error(error)); */








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

}

