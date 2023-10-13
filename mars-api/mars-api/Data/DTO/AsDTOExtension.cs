using mars_api.Data.DTO.Users;
using mars_api.Data.Models.Users;

namespace mars_api.Data.DTO
{
    public static class AsDTOExtension
    {
        public static UserDTO AsDTO(this User user)
        {
            return new UserDTO()
            {
                Id = user.Id,
                Email = user.Email,
                Title = user.Title,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Birthday = user.Birthday,
                PhoneNumbers = user.PhoneNumbers.Select(p => p.AsDTO()).ToList(),
                Addresses = user.Addresses.Select(a => a.AsDTO()).ToList(),
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
                Country = address.Country.AsDTO(),
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

        public static CountryDTO AsDTO(this Country country)
        {
            return new CountryDTO()
            {
                Id = country.Id,
                Name = country.Name,
            };
        }
    }
}