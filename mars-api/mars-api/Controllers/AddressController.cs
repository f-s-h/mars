using mars_api.Data.DTO.Users;
using mars_api.Services.UserService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace mars_api.Controllers
{
    [Authorize]
    [AllowAnonymous] //TODO Remove 
    [Route("/api/[controller]/[action]")]
    public class AddressController: ControllerBase
    {
        private readonly IAddressService addressService;
        
        public AddressController(IAddressService addressService)
        {
            this.addressService = addressService;
        }

        [HttpGet]
        public ActionResult<ICollection<AddressDTO>> GetAllAddresses()
        {
            var addresses= addressService.GetAllAdresses();
            if (addresses.IsNullOrEmpty())
            {
                return NoContent();
            }
            return Ok(addresses);
        }

        [HttpGet("{userId}")]
        public ActionResult<ICollection<AddressDTO>> GetAddressesForUserId([FromRoute] Guid userId)
        {
            var addresses = addressService.GetAdressesForUserId(userId);
            if (addresses.IsNullOrEmpty())
            {
                return NoContent();
            }
            return Ok(addresses);
        }

        [HttpGet("{addressId}")]
        public ActionResult<AddressDTO> GetAddressById([FromRoute] Guid addressId)
        {
            var address = addressService.GetAddressById(addressId);
            if (address == null)
            {
                return NoContent();
            }
            return Ok(address);
        }
    }
}
