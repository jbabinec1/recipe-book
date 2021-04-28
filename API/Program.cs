using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using DataAccessLibrary;
using DataAccessLibrary.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API
{
    public class Program
    {
       // public static MongoDBDataAccess db;

        public static void Main(string[] args)
        {
           // db = new MongoDBDataAccess("MongoContactsDB", GetConnectionString());
           CreateHostBuilder(args).Build().Run();

            //GetRecipeById("457c9c7c-9d25-44f8-ad40-4a04ad7cdb7d");

        }



      /*  private static void GetRecipeById(string id)
        {
            Guid guid = new Guid(id);
           var test = db.LoadRecipeRecordById<RecipeModel>("Users", guid);

            Console.WriteLine($"{test.NameOfDish}");
            Console.WriteLine("Hi!!!");

        } */



     /*   private static string GetConnectionString(string connectionStringName = "Default")
        {
            string output = "";

            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");

            var config = builder.Build();

            output = config.GetConnectionString(connectionStringName);

            return output;

        } */




        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
