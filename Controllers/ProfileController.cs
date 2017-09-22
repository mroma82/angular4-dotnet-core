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
        private readonly AppSettings _appSettings;

        public ProfileController(
            IOptions<AppSettings> appSettings
        )
        {
            _appSettings = appSettings.Value;
        }
        
        // GET api/values
        [HttpGet]
        public string Test()
        {
            return "It works!";
        }

        // Is authenticated
        [AllowAnonymous]
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
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody]Models.Login.Request request)
        {
            // check 
            if(request.Email == "mroma@test.com" && request.Password == "123")
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[] 
                    {
                        new Claim(ClaimTypes.Name, "123-123")
                    }),
                    Expires = DateTime.UtcNow.AddDays(7),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                var tokenString = tokenHandler.WriteToken(token);
    
                // return basic user info (without password) and token to store client side
                return Ok(new {
                    Id = "123-123",
                    Username = "mroma",
                    FirstName = "Michael",
                    LastName = "Roma",
                    Token = tokenString
                });                
            }
            else
            {
                return Unauthorized();
            }
        }

    }
}
