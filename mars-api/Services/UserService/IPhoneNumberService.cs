using mars_api.Data.DTO.User;

namespace mars_api.Services.UserService
{
    public interface IPhoneNumberService
    {
        public ICollection<PhoneNumberDTO> GetAllPhoneNumbers();
        public ICollection<PhoneNumberDTO> GetPhoneNumbersForUserId(Guid userId);
    }
}
