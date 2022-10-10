using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Register.Models
{
    public class User
    {
        public int UserId {get; set; }
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string Pwd{ get; set; }

        public DateTime Membersince { get; set; }
    }
}


//https://localhost:44390/