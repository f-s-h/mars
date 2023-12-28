using mars_api.Data.Models.Users;

namespace mars_api.Data.DTO.Users
{
    public static class AsDTOExtension
    {
        public static UserDTO AsDTO(this User user)
        {
            return new UserDTO()
            {
                Id = user.Id,
                Salutation = user.Salutation,
                Prefix = user.Prefix,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Suffix = user.Suffix,
                Birthday = user.Birthday,
                Emails = user.Emails.Select(e => e.AsDTO()).ToList(),
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

        public static EMailDTO AsDTO(this EMail email)
        {
            return new EMailDTO()
            {
                Id = email.Id,
                UserId = email.UserId,
                Email = email.Email,
            };
        }
    }
}