using mars_api.Data.DTO.Users;
using mars_api.Services.UserService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace mars_api.Controllers
{
    [Authorize]
    [AllowAnonymous] // TODO: Remove!
    [Route("/api/[controller]/[action]")]
    public class PhoneNumberController: ControllerBase
    {
        private readonly IPhoneNumberService phoneNumberService;
        public PhoneNumberController(IPhoneNumberService phoneNumberService)
        {
            this.phoneNumberService = phoneNumberService;
        }

        [HttpGet]
        public ActionResult<ICollection<PhoneNumberDTO>> GetAllPhoneNumbers()
        {
            var phoneNumbers = phoneNumberService.GetAllPhoneNumbers();
            if(phoneNumbers.IsNullOrEmpty())
            {
                return NoContent();
            }
            return Ok(phoneNumbers);
        }

        [HttpGet("{userId}")]
        public ActionResult<ICollection<PhoneNumberDTO>> GetPhoneNumbersForUserId([FromRoute] Guid userId) 
        {
            var phoneNumbers = phoneNumberService.GetPhoneNumbersForUserId(userId);
            if(phoneNumbers.IsNullOrEmpty())
            {
                return NoContent();
            }
            return Ok(phoneNumbers);
        }

        [HttpGet("{phoneNumberId}")]
        public ActionResult<PhoneNumberDTO> GetPhoneNumberById([FromRoute] Guid phoneNumberId)
        {
            var phoneNumber = phoneNumberService.GetPhoneNumberById(phoneNumberId);
            if(phoneNumber == null)
            {
                return NoContent();
            }
            return Ok(phoneNumber);
        }

        [HttpPost]
        public ActionResult<PhoneNumberDTO> CreatePhoneNumber([FromBody] PhoneNumberDTO phoneNumberDTO)
        {
            phoneNumberDTO = phoneNumberService.CreatePhoneNumber(phoneNumberDTO);
            return Ok(phoneNumberDTO);
        }
    }
}
