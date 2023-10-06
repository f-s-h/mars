using mars_api.Context;
using mars_api.Data.DTO;
using mars_api.Data.DTO.Users;

namespace mars_api.Services.UserService
{
    public class AddressService : IAddressService
    {
        private readonly MarsContext context;
        public AddressService(MarsContext context) { 
            this.context = context;
        }

        public ICollection<AddressDTO> GetAdressesForUserId(Guid userId)
        {
            return context.Addresses
                .Where(a => a.UserId == userId)
                .Select(a => a.AsDTO())
                .ToList();
        }

        public ICollection<AddressDTO> GetAllAdresses()
        {
            return context.Addresses
                .Select(a => a.AsDTO())
                .ToList();
        }
    }
}
