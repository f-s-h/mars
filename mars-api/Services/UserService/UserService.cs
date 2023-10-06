using AutoMapper.QueryableExtensions;
using Duende.IdentityServer.Extensions;
using mars_api.Context;
using mars_api.Data.DTO;
using mars_api.Data.DTO.Users;
using mars_api.Data.Models;
using mars_api.Data.Models.Users;

namespace mars_api.Services.UserService
{
    public class UserService : IUserService
    {
        private readonly MarsContext context;
        private readonly IPhoneNumberService phoneNumberService;
        private readonly IAddressService addressService;
        public UserService(MarsContext context, IPhoneNumberService phoneNumberService, IAddressService addressService)
        {
            this.context = context;
            this.addressService = addressService;
            this.phoneNumberService = phoneNumberService;
        }

        public ICollection<UserDTO> GetAllUsers()
        {
            var users = context.Users
                .Select(u => u.AsDTO())
                .ToList();

            foreach (var user in users)
            {
                user.Addresses = addressService.GetAdressesForUserId(user.Id);
                user.PhoneNumbers = phoneNumberService.GetPhoneNumbersForUserId(user.Id);
            }

            return users;
        }

        public UserDTO? GetUserById(Guid userId)
        {
            string userIdString = userId.ToString();
            var user = context.Users
                .Where(u => u.Id.Equals(userIdString))
                .Select(u => u.AsDTO())
                .FirstOrDefault();
            if(user != null)
            {
                user.Addresses = addressService.GetAdressesForUserId(userId);
                user.PhoneNumbers = phoneNumberService.GetPhoneNumbersForUserId(userId);
            } 
            return user;
        }

        public UserDTO CreateUser(UserDTO userDTO)
        {
            Guid id = Guid.NewGuid();
            userDTO.Id = id;
            User user = userDTO.AsModel();
                       
            context.Users.Add(user);

            if(userDTO.Addresses != null)
            {
                foreach (AddressDTO addressDTO in userDTO.Addresses)
                {
                    Guid addressId = Guid.NewGuid();
                    addressDTO.Id = addressId;
                    addressDTO.UserId = userDTO.Id;
                    Address address = addressDTO.AsModel();
                    context.Addresses.Add(address);
                }
            }

            if(userDTO.PhoneNumbers != null)
            {
                foreach (PhoneNumberDTO phoneNumberDTO in userDTO.PhoneNumbers)
                {
                    Guid phoneNumberId = Guid.NewGuid();
                    phoneNumberDTO.Id = phoneNumberId;
                    phoneNumberDTO.UserId = userDTO.Id;
                    PhoneNumber phoneNumber = phoneNumberDTO.AsModel();
                    context.PhoneNumbers.Add(phoneNumber);
                }
            }

            context.SaveChanges();

            // Returns userDTO with new ids
            return userDTO;
        }
    }
}
