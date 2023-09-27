using mars_api.Data.DTO.User;
using mars_api.Data.Models.User;

namespace mars_api.Data.DTO
{
    public static class AsDTOExtension
    {
        public static UserDTO AsDTO(this Models.User.User user) {
            return new UserDTO()
            {
                Id = Guid.Parse(user.Id),
                UserName = user.UserName,
                Email = user.Email,
                Title = user.Title,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Birthday = user.Birthday,
            };
        }

        public static AddressDTO AsDTO(this Address address)
        {
            return new AddressDTO()
            {
                Id = address.Id,
                UserId = address.UserId,
                Street = address.Street,
                HouseNumber = address.HouseNumber,
                City = address.City,
                PostalCode = address.PostalCode,
                CountryId = address.CountryId,
            };
        }

        public static PhoneNumberDTO AsDTO(this PhoneNumber phoneNumber)
        {
            return new PhoneNumberDTO()
            {
                Id = phoneNumber.Id,
                UserId = phoneNumber.UserId,
                Number = phoneNumber.Number,
            };
        }

        public static CountryDTO AsDTO(this Country country) {
            return new CountryDTO()
            {
                Id = country.Id,
                Name = country.Name,
            };
        }
    }
}
