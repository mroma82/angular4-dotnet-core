using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace app2.Controllers
{
    [Authorize]
    [Route("api/[controller]/[action]")]
    public class ProfileController : Controller
    {

        private readonly Services.IAuthValidator authValidator;
        private readonly Services.IUserRepository userRepository;


        public ProfileController(
            Services.IAuthValidator authValidator,
            Services.IUserRepository userRepository
        )
        {
            this.authValidator = authValidator;
            this.userRepository = userRepository;
        }
        
        // GET api/values
        [HttpGet]
        public string Test()
        {
            return "It works!";
        }

        // Is authenticated
        [AllowAnonymous, HttpPost]
        public dynamic IsAuthenticated()
        {
            return authValidator.Check();
        }

        // login
        [AllowAnonymous, HttpPost]
        public Models.Login.Response Login([FromBody]Models.Login.Request request)
        {
            // check 
            var user = userRepository.GetAll().FirstOrDefault(x => x.Email == request.Email && x.Password == request.Password);
            if(user != null)
            {
                
    
                // return basic user info (without password) and token to store client side
                return new Models.Login.Response
                {
                    Success = true,
                    Token = tokenString,
                    Profile = user
                };                
            }
            else
            {
                return new Models.Login.Response
                {
                    Success = false,
                    Text = "Invalid login"
                };
            }
        }

    }
}
