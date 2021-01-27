using System;
using System.Collections.Generic;
using MongoDB.Driver;
using MongoDB.Bson;
using DataAccessLibrary.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace DataAccessLibrary
{
    public class MongoDBDataAccess 
    {

        

        private IMongoDatabase db;
        public MongoDBDataAccess(string dbName, string connectionString)
        {
            var client = new MongoClient(connectionString);
            db = client.GetDatabase(dbName);
        }

        // let collection = db.GetCollection<T>("Contacts");



        public async Task<UserModel> FindArrayAndUpdate(string table, ObjectId Id, RecipeModel modell) {

            table = "Users";
            var collection = db.GetCollection<UserModel>(table);

            var filter = Builders<UserModel>.Filter.Eq("Id", Id);

           var update = Builders<UserModel>.Update.Push(e => e.Recipes, new RecipeModel
            {
                NameOfDish = modell.NameOfDish,
                Ingredients = modell.Ingredients,
                Instructions = modell.Instructions
            });


         
                return await collection.FindOneAndUpdateAsync(filter, update);
                

        }





        public void InsertRecord<T>(string table, T record)
        {
            var collection = db.GetCollection<T>(table);
            collection.InsertOne(record);

        }


        /*  public T FindTable<T>(string table)
          {
             var collection = db.GetCollection<T>(table);
              collection = db.GetCollection("Users");
              // return collection.

          } */

        public List<T> LoadCollection<T>(string table = "Users")
        {
            var collection = db.GetCollection<T>(table);
            return collection.Find(new BsonDocument()).ToList();
        }




        public List<T> LoadRecords<T>(string table)
        {
            var collection = db.GetCollection<T>(table);
            return collection.Find(new BsonDocument()).ToList();
        }


        public T LoadRecordById<T>(string table, Guid id)
        {

            var collection = db.GetCollection<T>(table);
            var filter = Builders<T>.Filter.Eq("Id", id);

            return collection.Find(filter).First();


        }


/* RIP      public void FindAndUpdate<T> (string table, RecipeModel modell, UserModel model, MongoDB.Bson.ObjectId Id)
        {
            table = "Users";
            var collection = db.GetCollection<UserModel>(table);

            var filter = Builders<UserModel>.Filter.Eq("Id", Id);
            //var filter = Builders<UserModel>.Filter.Eq("_id", model.Id);

      
             var update = Builders<UserModel>.Update.Push(e => e.Recipes, new RecipeModel
            {
                NameOfDish = modell.NameOfDish,
                Ingredients = modell.Ingredients,
                Instructions = modell.Instructions 
            });


            collection.FindOneAndUpdate(filter, update);
         // return  await collection.FindOneAndUpdateAsync(filter, update);
           

        }  */







        //If exists update, if doesn't exist create it

        [Obsolete]

        public void UpsertRecord<T>(string table, MongoDB.Bson.ObjectId Id, T record)
        {
            var collection = db.GetCollection<T>(table);

            var result = collection.ReplaceOne(
                new BsonDocument("_id", Id),
                record,
                new ReplaceOptions { IsUpsert = true });

        }


        public void DeleteRecord<T>(string table, Guid id)
        {
            var collection = db.GetCollection<T>(table);
            var filter = Builders<T>.Filter.Eq("Id", id);

            collection.DeleteOne(filter);


        }










    }
}
