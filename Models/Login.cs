using System;

namespace app2.Models
{
    public class Login
    {
        public class Request
        {
            public string Email {get;set;}
            public string Password {get;set;}
        }

        public class Response
        {
            public bool Success {get;set;}

            public dynamic Profile {get;set;}
        }

    }
}