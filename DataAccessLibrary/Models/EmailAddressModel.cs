using System;
using System.Collections.Generic;

namespace DataAccessLibrary.Models
{
    public class EmailAddressModel
    {
        public string EmailAddress { get; set; }
       
        public List<ProviderModel> Providers { get; set; } = new List<ProviderModel>();

    }
}
