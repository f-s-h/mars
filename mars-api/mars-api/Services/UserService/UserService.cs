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
            return context.Users
                .Select(u => u.AsDTO())
                .ToList();
        }

        public UserDTO? GetUserById(Guid userId)
        {
            return context.Users
                .Where(u => u.Id == userId)
                .Select(u => u.AsDTO())
                .FirstOrDefault();
        }

        public UserDTO CreateUser(UserDTO userDTO)
        {
            Guid id = Guid.NewGuid();
            userDTO.Id = id;
            User user = userDTO.AsModel();

            context.Users.Add(user);
            context.SaveChanges();

            // Returns userDTO with new ids
            return userDTO;
        }
    }
}
