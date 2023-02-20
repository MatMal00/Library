﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LibraryBackend.Context;
using LibraryBackend.Models;
using LibraryBackend.ResponseModels;
using LibraryBackend.RequestModels;

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

        // PUT: api/Users1/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, UserPutRequest user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }
            var userFromDb = await _context.Users.FindAsync(user.Id); 

            if(userFromDb == null)
            {
                return BadRequest();
            }

            userFromDb.FirstName = user.FirstName;
            userFromDb.Lastname = user.Lastname;
            userFromDb.Email = user.Email;
            userFromDb.RoleId = user.RoleId;

            _context.Entry(userFromDb).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }

    }
}
