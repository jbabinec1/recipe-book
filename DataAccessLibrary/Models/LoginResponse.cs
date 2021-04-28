using System;
using System.Collections.Generic;

namespace DataAccessLibrary.Models
{
    public class LoginResponse
    {
        public LoginResponse( string token, string userName, string email)
        {
            Token = token;
            UserName = userName;
            Email = email;

        }


        public string Token { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }


    }



    public class SignUpResponse
    {


        public SignUpResponse(string token, string userName, string email)
        {

            Token = token;
            UserName = userName;
            Email = email;



        }


        public string Token { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }



    }






    public class UserDataResponse 
      {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public List<RecipeModel> Recipes { get; set; } = new List<RecipeModel>();
      


        }




    public class RecipeResponse
    {
        public string NameOfDish { get; set; }

        public string Ingredients { get; set; }

        public string Instructions { get; set; }
    }








}
