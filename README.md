## Recipe Book

Hello! I made this app mainly to work on my C# / .NET skills .. so I decided to create an API and added a beautiful (debatable) frontend interface utilizing Angular (v8).

This app features user login & registration. Upon login, you can create your very own recipe book. Each recipe item includes a name, description and and an image.


## How to run

In Visual Studio open the solution for this project: AngularJrApp

It might be a bit difficult for most folks to run the front end Angular App, as it requires a pretty old version of node (v16.5.0). But if you're feeling up to that challenge, 
run two projects at startup:  AngularJr and API. If you just want to test endpoints, just run the API project in Visual Studio.


## Example CURL commands 

## Fetch all recipes from DB
`curl -X GET https://localhost:28520/api/contacts/GetAll`

## Fetch particular recipe by ID 
`curl -X GET https://localhost:28520/api/contacts/GetRecipe/{id}`


