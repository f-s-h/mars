using mars_api.Data.DTO.Users;
using mars_api.Data.Models.Users;
using System.Reflection.Metadata.Ecma335;

namespace mars_api.Data.Models
{
    public static class AsModelExtension
    {
        public static User AsModel(this UserDTO userDTO)
        {
            return new User()
            {
                Id = userDTO.Id,
                Email = userDTO.Email,
                Title = userDTO.Title,
                FirstName = userDTO.FirstName,
                LastName = userDTO.LastName,
                Birthday = userDTO.Birthday,
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
    }
}
