using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace app2.Services
{
    public interface IAuthValidator
    {
        dynamic Check();
    }

    // class
    public class AuthValidator : IAuthValidator
    {
        // services
        HttpContext httpContextAccessor;
        Models.AppSettings appSettings;
        IUserRepository userRepository;

        // constructor
        public AuthValidator(
            IOptions<Models.AppSettings> appSettings,
            IHttpContextAccessor httpContextAccessor,
            IUserRepository userRepository
        )
        {
            this.httpContextAccessor = httpContextAccessor.HttpContext;
            this.appSettings = appSettings.Value;
            this.userRepository = userRepository;
        }

        // check
        public dynamic Check()
        {
            var request = httpContextAccessor.Request;
            if (request.Headers.ContainsKey("Authorization"))
            {
                var authHeader = request.Headers["Authorization"].FirstOrDefault();
                var authBits = authHeader.Split(' ');
                if (authBits.Length != 2)
                {
                    return new { Success = false, Text = "e1" };
                }
                else if (!authBits[0].ToLowerInvariant().Equals("bearer"))
                {
                    return new { Success = false, Text = "e2" };
                }

                var tokenHandler = new JwtSecurityTokenHandler();
                
                    
                var key = Encoding.ASCII.GetBytes(appSettings.Secret);

                // return parameters
                var parameters = new TokenValidationParameters 
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };

                SecurityToken validatedToken;
                try
                {
                    tokenHandler.ValidateToken(authBits[1], parameters, out validatedToken);
                }
                catch (Exception ex)
                {
                    return new { Success = false, Text = "e3-" + ex.Message };
                }

                var secToken = new JwtSecurityToken(authBits[1]);

                // check expired
                if( validatedToken.ValidTo >= DateTime.UtcNow)
                {
                    var userIdStr = secToken.Claims.FirstOrDefault()?.Value;
                    if(int.TryParse(userIdStr, out int userId))
                    {
                        var user = userRepository.GetSingle(userId);
                        if( user != null)
                        {
                            return new 
                            {
                                Success = true,
                                Profile = user
                            };
                        }

                        return new { Success = false, Text = "invalid user" };
                    }

                    return new { Success = false, Text = $"invalid user id type {userIdStr}" };
                }

                return new { Success = false, Text = "expired" };
            }

            return new { Success = false, Text = "no header" };
        }
    }
}   