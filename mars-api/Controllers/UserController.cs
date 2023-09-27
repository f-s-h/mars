using Duende.IdentityServer.Extensions;
using mars_api.Data.Models.Users;
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
        public ActionResult<ICollection<User>> GetAllUsers()
        {
            ICollection<User> users = userService.GetAllUsers();
            if (users.IsNullOrEmpty())
            {
                return NoContent();
            }
            return Ok(users);
        }

        [HttpGet("{userId}")]
        public ActionResult<ICollection<User>> GetUserById([FromRoute] Guid userId)
        {
            User? user = userService.GetUserById(userId);

            Console.WriteLine(user?.ToString());

            if(user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
    }
}
