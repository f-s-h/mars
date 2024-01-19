using mars_api.Data.DTO.Mail;
using mars_api.Services.MailService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace mars_api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        private readonly IMailService emailService;

        public MailController(IMailService emailService)
        {
            this.emailService = emailService;
        }

        [HttpPost]
        public IActionResult SendEmail([FromBody] MailDTO request)
        {
            emailService.SendEmail(request);
            return Ok();
        }

        [HttpPost]
        public IActionResult SendBroadcastEmail([FromBody] MailDTO request)
        {
            emailService.SendBroadcastEmail(request);
            return Ok();
        }

        [HttpPost("{groupId}")]
        public IActionResult SendBroadcastGroupEmail([FromRoute] Guid groupId, [FromBody] MailDTO request)
        {
            emailService.SendBroadcastGroupEmail(groupId, request);
            return Ok();
        }
    }
}
