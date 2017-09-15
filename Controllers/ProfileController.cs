using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace app2.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ProfileController : Controller
    {
        // GET api/values
        [HttpGet]
        public string Test()
        {
            return "It works!";
        }

        // Is authenticated
        [HttpPost]
        public dynamic IsAuthenticated()
        {
            return new 
            {
                IsAuthenticated = false,
                Profile = new {
                    Username = "mroma82@gmail.com",
                    FirstName = "Michael",
                    LastName = "Roma"
                }
            };
        }

        // login
        [HttpPost]
        public Models.Login.Response Login([FromBody]Models.Login.Request request)
        {
            // check 
            if(request.Email == "mroma@test.com" && request.Password == "123")
            {
                return new Models.Login.Response
                {
                    Success = true,
                    User = new 
                    {
                        FirstName = "Michael",
                        LastName = "Roma",
                        Email = "mroma@test.com"
                    }
                };
            }
            else
            {
                return new Models.Login.Response();
            }
        }

    }
}
