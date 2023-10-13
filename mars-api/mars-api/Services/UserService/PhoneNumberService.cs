using mars_api.Context;
using mars_api.Data.DTO;
using mars_api.Data.DTO.Users;
using mars_api.Data.Models;
using mars_api.Data.Models.Users;

namespace mars_api.Services.UserService
{
    public class PhoneNumberService : IPhoneNumberService
    {
        private readonly MarsContext context;

        public PhoneNumberService(MarsContext context)
        {
            this.context = context;
        }

        public ICollection<PhoneNumberDTO> GetAllPhoneNumbers()
        {
            return context.PhoneNumbers
                .Select(p => p.AsDTO())
                .ToList();
        }

        public PhoneNumberDTO? GetPhoneNumberById(Guid phoneNumberId)
        {
            return context.PhoneNumbers
                .Where(p => p.Id == phoneNumberId)
                .Select(p => p.AsDTO())
                .FirstOrDefault();
        }

        public ICollection<PhoneNumberDTO> GetPhoneNumbersForUserId(Guid userId)
        {
            return context.PhoneNumbers
                .Where(p => p.UserId == userId)
                .Select(p => p.AsDTO())
                .ToList();
        }
        public PhoneNumberDTO CreatePhoneNumber(PhoneNumberDTO phoneNumberDTO)
        {
            Guid id = Guid.NewGuid();
            phoneNumberDTO.Id = id;
            PhoneNumber phoneNumber = phoneNumberDTO.AsModel();

            context.PhoneNumbers.Add(phoneNumber);
            context.SaveChanges();

            // Returns phonenumber with new id
            return phoneNumberDTO;
        }
    }
}
