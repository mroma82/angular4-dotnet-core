using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace app2.Services
{
    public interface IAuthTokenGenerator
    {
        string Generate(int userId);
    }

    // class
    public class AuthTokenGenerator : IAuthTokenGenerator
    {
        // services
        Models.AppSettings appSettings;

        // new
        public AuthTokenGenerator(
            IOptions<Models.AppSettings> appSettings
        )
        {
            this.appSettings = appSettings.Value;
        }

        public string Generate(int userId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = System.Text.Encoding.ASCII.GetBytes(appSettings.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] 
                {
                    new Claim(ClaimTypes.NameIdentifier,userId.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(30),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }
    }

}