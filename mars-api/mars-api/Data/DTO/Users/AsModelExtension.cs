using mars_api.Data.Models.Users;
using System.Reflection.Metadata.Ecma335;

namespace mars_api.Data.DTO.Users
{
    public static class AsModelExtension
    {
        public static User AsModel(this UserDTO userDTO)
        {
            return new User()
            {
                Id = userDTO.Id,
                Salutation = userDTO.Salutation,
                Prefix = userDTO.Prefix,
                FirstName = userDTO.FirstName,
                LastName = userDTO.LastName,
                Suffix = userDTO.Suffix,
                Birthday = userDTO.Birthday,
                Emails = userDTO.Emails.Select(e => e.AsModel()).ToList(),
                Addresses = userDTO.Addresses.Select(a => a.AsModel()).ToList(),
                PhoneNumbers = userDTO.PhoneNumbers.Select(p => p.AsModel()).ToList(),
            };
        }

        public static Address AsModel(this AddressDTO addressDTO)
        {
            return new Address()
            {
                Id = addressDTO.Id,
                UserId = addressDTO.UserId,
                Street = addressDTO.Street,
                HouseNumber = addressDTO.HouseNumber,
                City = addressDTO.City,
                PostalCode = addressDTO.PostalCode,
                CountryId = addressDTO.CountryId,
            };
        }

        public static PhoneNumber AsModel(this PhoneNumberDTO phoneNumberDTO)
        {
            return new PhoneNumber()
            {
                Id = phoneNumberDTO.Id,
                UserId = phoneNumberDTO.UserId,
                Number = phoneNumberDTO.Number,
            };
        }

        public static EMail AsModel(this EMailDTO emailDTO)
        {
            return new EMail()
            {
                Id = emailDTO.Id,
                UserId = emailDTO.UserId,
                Email = emailDTO.Email,
            };
        }
    }
}