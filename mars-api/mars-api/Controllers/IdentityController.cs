using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace mars_api.Controllers
{
    [Route("identity")]
    [Authorize ]
    public class IdentityController
    {
        [HttpGet]
        public IActionResult Get()
        {
            return new JsonResult("test");
        }
    }
}
