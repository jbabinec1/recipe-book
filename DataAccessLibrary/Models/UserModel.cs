using System;
//using AspNetCore.Identity.Mongo.Model;
using System.Collections.Generic;
using AspNetCore.Identity.Mongo.Model;
using Microsoft.AspNetCore.Identity;
using MongoDB.Driver;




namespace DataAccessLibrary.Models

{
    public class UserModel : MongoUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        //public string Email { get; set; }

        public List<RecipeModel> Recipes { get; set; } = new List<RecipeModel>();
    }

}
