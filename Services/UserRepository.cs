using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace app2.Services
{
    public interface IUserRepository
    {
        dynamic[] GetAll();
        dynamic GetSingle(int id);
        dynamic FindByEmail(string email);
    }
    public class UserRepository : IUserRepository
    {
        public dynamic FindByEmail(string email)
        {
            return GetAll().FirstOrDefault(x => x.Email == email);
        }

        public dynamic[] GetAll()
        {
            return new dynamic[]
            {
                new { Email = "mroma@test.com", Password = "123", FirstName = "Michael", LastName = "Roma", id = 1 },
                new { Email = "mike@test.com", Password = "234", FirstName = "Mike", LastName = "Smith", id = 2 }
            };
        }

        public dynamic GetSingle(int id)
        {
            return GetAll().FirstOrDefault(x => x.id == id);
        }
    }
}   