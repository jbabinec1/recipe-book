using System;
using System.Collections.Generic;
using AspNetCore.Identity.Mongo.Model;


namespace DataAccessLibrary.Models
{
    public class RoleModel : MongoRole
    {

        public string regular { get; set; }


    }
}
