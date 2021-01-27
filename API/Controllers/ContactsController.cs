using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccessLibrary;
using DataAccessLibrary.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication;
using System.Net;
using MongoDB.Driver;

namespace API.Controllers
{
    [Route("api/[controller]/[action]")]  //[action]
    public class ContactsController : Controller
    {

        public string dbdb;
        public MongoDBDataAccess db;
        public readonly string tableName = "Users";
        private readonly IConfiguration _config;
        private readonly UserManager<UserModel> _userManager;
        private readonly SignInManager<UserModel> _signInManager;


        public ContactsController(IConfiguration config, UserManager<UserModel> userManager, SignInManager<UserModel> signInManager) {

            _config = config;
            db = new MongoDBDataAccess("MongoContactsDB", _config.GetConnectionString("Default"));
            _userManager = userManager;
            _signInManager = signInManager;

            

        }




        // GET api/contacts .. requires token to get user data  
            [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
            [HttpGet]
            public async Task<ActionResult> UserData()
            {
                var user = await _userManager.GetUserAsync(User);
                var userData = new UserDataResponse
                {
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Recipes = user.Recipes

                };
                return Ok(userData);
            }




        //Add new recipe to User Model

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost]
        public async Task<UserModel> PostRecipe([FromBody] RecipeModel modell)
        {

           var user = await _userManager.GetUserAsync(User);

            var recipe = new RecipeModel { NameOfDish = modell.NameOfDish, Ingredients = modell.Ingredients, Instructions = modell.Instructions };


           return await db.FindArrayAndUpdate(tableName, user.Id, recipe);

            //return await db.FindArrayAndUpdate(tableName, user.Id, recipe, model);



            //var ret = await user.Recipes.FindOneAndUpdateAsync(filter, update);

        }







        /*    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
            [HttpPost]
            public async Task<IActionResult> PostRecipe([FromBody]UserModel model, RecipeModel modell)
            {


                var user = await _userManager.GetUserAsync(User);

                db.FindAndUpdate<UserModel>(tableName, modell, model, model.Id);







                var userData = new UserDataResponse
                {

                    Recipes = user.Recipes

                };

                return Ok(userData);

                //var ret = await user.Recipes.FindOneAndUpdateAsync(filter, update);


            }  */






        // POST api/contacts/register
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterEntity model)
        {
            if (ModelState.IsValid)
            {
                var user = new UserModel { FirstName = model.FirstName, LastName = model.LastName, UserName = model.Email, Email = model.Email };
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, false);
                    var token = AuthenticationHelper.GenerateJwtToken(model.Email, user, _config);

                    var rootData = new SignUpResponse(token, user.UserName, user.Email);
                    db.InsertRecord(tableName, user);
                    return Created("api/contacts/register", rootData);
                  
                }
                //db.InsertRecord(tableName, user);
                return Ok(string.Join(",", result.Errors?.Select(error => error.Description)));
            }
            string errorMessage = string.Join(", ", ModelState.Values.SelectMany(x => x.Errors).Select(x => x.ErrorMessage));
            return BadRequest(errorMessage ?? "Bad Request");
        }






        //Login

        [HttpPost]
        [AllowAnonymous]

        public async Task<ActionResult> Login([FromBody] LoginEntity model)
        {

            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);
                if (result.Succeeded)
                {

                var appUser = _userManager.Users.SingleOrDefault(r => r.Email == model.Email);

                var token = AuthenticationHelper.GenerateJwtToken(model.Email, appUser, _config);

                var rootData = new LoginResponse(token, appUser.UserName, appUser.Email);

                return Ok(rootData);


                }
                return StatusCode((int)HttpStatusCode.Unauthorized, "Bad Credentials");
            }

            string errorMessage = string.Join(", ", ModelState.Values.SelectMany(x => x.Errors).Select(x => x.ErrorMessage));
            return BadRequest(errorMessage ?? "Bad Request");

        } 






        /*  [HttpPost]  Save this
           public void PostContact([FromBody]ContactModel contact)
           {
               db.InsertRecord(tableName, contact);


           } */



                  [HttpGet] 
             public List<UserModel> GetAll()
             {
                 return db.LoadRecords<UserModel>(tableName);


             } 




        //Update if post already exists. Add new contact if none exist

        /*  [HttpPost]
          public void PostUpsert([FromBody] UserModel user)
          {

              db.UpsertRecord(tableName, user.Id, user);
          } */



    }
}
