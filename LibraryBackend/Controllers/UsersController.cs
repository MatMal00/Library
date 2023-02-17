using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LibraryBackend.Context;
using LibraryBackend.Models;
using LibraryBackend.ResponseModels;

namespace LibraryBackend.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly LibraryContext _context;

        public UsersController(LibraryContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserSimplifiedResponse>>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();
            var roles = await _context.Roles.ToListAsync();

            return users.Select(user => new UserSimplifiedResponse()
            {
                Id = user.Id,
                Email = user.Email,
                FirstName = user.FirstName,
                Lastname = user.Lastname,
                Role = roles.Find(role => role.Id == user.RoleId),
            }).ToList();
        }

    }
}
