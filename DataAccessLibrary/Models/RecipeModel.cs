using System;
using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

namespace DataAccessLibrary.Models
{
    public class RecipeModel

    {
        [BsonId]
        public Guid Id { get; set; } = Guid.NewGuid();

        public string NameOfDish { get; set; }

        public string Ingredients { get; set; }

        public string Instructions { get; set; }

        public string Image { get; set; }
    }
}
