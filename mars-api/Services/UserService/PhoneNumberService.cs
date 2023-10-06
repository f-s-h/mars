using mars_api.Context;
using mars_api.Data.DTO;
using mars_api.Data.DTO.Users;

namespace mars_api.Services.UserService
{
    public class PhoneNumberService : IPhoneNumberService
    {
        private readonly MarsContext context;

        public PhoneNumberService(MarsContext context) { 
            this.context = context;
        } 
        public ICollection<PhoneNumberDTO> GetAllPhoneNumbers()
        {
            return context.PhoneNumbers
                .Select(p => p.AsDTO())
                .ToList();
        }

        public ICollection<PhoneNumberDTO> GetPhoneNumbersForUserId(Guid userId)
        {
            return context.PhoneNumbers
                .Where(p => p.UserId == userId)
                .Select(p => p.AsDTO())
                .ToList();
        }
    }
}
