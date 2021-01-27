using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularJr.Controllers
{
    [Route("api/[controller]")]
    public class SomeController : Controller
    {
        //private readonly IHttpClientFactory _httpClientFactory;


        // GET: /<controller>/
      /*  [HttpGet]
        private async Task<IActionResult> GetStuff()
        {

            var _client = _httpClientFactory.CreateClient();
            var response = await _client.GetAsync("https://swapi.dev/api/people/1/");

            if (response.IsSuccessStatusCode)
            {
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };

                string responseText = await response.Content.ReadAsStringAsync();
               // contacts = JsonSerializer.Deserialize<List<ContactModel>>(responseText, options);


            }
            else
            {
                throw new Exception(response.ReasonPhrase);
            }

        } */
    }
}
