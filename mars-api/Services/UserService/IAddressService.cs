using mars_api.Data.DTO.Users;

namespace mars_api.Services.UserService
{
    public interface IAddressService
    {
        public ICollection<AddressDTO> GetAllAdresses();
        public ICollection<AddressDTO> GetAdressesForUserId(Guid userId);
    }
}
