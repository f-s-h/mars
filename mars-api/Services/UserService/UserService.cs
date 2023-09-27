using AutoMapper.QueryableExtensions;
using Duende.IdentityServer.Extensions;
using mars_api.Context;
using mars_api.Data.DTO;
using mars_api.Data.DTO.User;
using mars_api.Data.Models.User;

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
    }
}
