using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Register.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Register.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class UserController : ControllerBase
    {
         private readonly IConfiguration _config;
         public readonly UserContext _context;
        public UserController(IConfiguration config, UserContext context)
        {
            _config = config;
            _context = context;
        }


        [AllowAnonymous]

        [HttpPost("CreateUser")]
        public IActionResult Create(User user)
        {
            if (_context.Users.Where(u => u.Email == user.Email).FirstOrDefault() != null)
            {
                return Ok("Already Exists");
            }
            user.Membersince = DateTime.Now;
            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok("Success");
        }

        [AllowAnonymous]

        [HttpPost("LoginUser")]

        public IActionResult Login(Login user)
        {
            var userAvailable  = _context.Users.Where(u => u.Email == user.Email && u.Pwd == user.Pwd).FirstOrDefault();

            if (userAvailable != null)
            {
                return Ok(new JwtService(_config).GenerateToken(
                    
                    userAvailable.UserId.ToString(),
                    userAvailable.FirstName,
                    userAvailable.LastName,
                    userAvailable.Email
                    )
                  );
            }

            return Ok("Failure");
        }

        [AllowAnonymous]
        [HttpPost("surveysubmit")]

        public IActionResult survey_submit(survey sur)
        {
            if (_context.SurveyData.Where(s => s.Emp_id == sur.Emp_id).FirstOrDefault() != null)
            {
                return Ok("Already submitted");
            }
            _context.SurveyData.Add(sur);
            _context.SaveChanges();
            return Ok("Sucessfully submitted");
        }
    }


}
