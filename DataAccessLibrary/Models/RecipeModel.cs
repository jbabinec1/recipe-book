using System;
using System.Collections.Generic;

namespace DataAccessLibrary.Models
{
    public class RecipeModel

    {

        public Guid Id { get; set; } = Guid.NewGuid();

        public string NameOfDish { get; set; }

       // public List<RecipeInstructions> RecipeInstructions { get; set; } = new List<RecipeInstructions>();

        public string Ingredients { get; set; }

        public string Instructions { get; set; }
    }
}
