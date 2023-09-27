﻿using Duende.IdentityServer.Extensions;
using mars_api.Data.DTO.User;
using mars_api.Services.UserService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace mars_api.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;

        public UserController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        public ActionResult<ICollection<UserDTO>> GetAllUsers()
        {
            ICollection<UserDTO> users = userService.GetAllUsers();
            if (users.IsNullOrEmpty())
            {
                return NoContent();
            }
            return Ok(users);
        }

        [HttpGet("{userId}")]
        public ActionResult<ICollection<UserDTO>> GetUserById([FromRoute] Guid userId)
        {
            UserDTO? user = userService.GetUserById(userId);

            Console.WriteLine(user?.ToString());

            if(user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
    }
}
