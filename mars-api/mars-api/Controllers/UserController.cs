using mars_api.Data.DTO.Users;
using mars_api.Services.UserService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace mars_api.Controllers
{
    [AllowAnonymous]
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;

        public UserController(IUserService userService)
        {
            this.userService = userService;
        }


        [HttpGet("{userId}")]
        public ActionResult<ICollection<UserDTO>> GetUserById([FromRoute] Guid userId)
        {
            var user = userService.GetUserById(userId);

            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpGet("{userId}")]
        public ActionResult<ICollection<UserDTO>> GetUserDetailById([FromRoute] Guid userId)
        {
            var user = userService.GetUserDetailById(userId);

            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpGet]
        public ActionResult<ICollection<UserDTO>> GetAllUsers()
        {
            var users = userService.GetAllUsers();
            if (users.IsNullOrEmpty())
            {
                return NoContent();
            }
            return Ok(users);
        }

        [HttpGet]
        public ActionResult<ICollection<UserDTO>> GetAllUsersDetail()
        {
            var users = userService.GetAllUsersDetail();
            if (users.IsNullOrEmpty())
            {
                return NoContent();
            }
            return Ok(users);
        }

        [HttpPost]
        public ActionResult<UserDTO> CreateUser([FromBody] UserDTO userDTO)
        {
            var createdUser = userService.CreateUser(userDTO);
            if(createdUser == null)
            {
                return BadRequest();
            }
            return Ok(createdUser);
        }

        [HttpPut]
        public ActionResult<UserDTO> UpdateUser([FromBody] UserDTO userDTO)
        {
            userService.UpdateUser(userDTO);
            return Ok();
        }
    }
}