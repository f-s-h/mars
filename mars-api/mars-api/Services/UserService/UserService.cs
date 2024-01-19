using mars_api.Context;
using mars_api.Data.DTO.Users;
using mars_api.Data.Models.Users;
using Microsoft.EntityFrameworkCore;

namespace mars_api.Services.UserService
{
    public class UserService : IUserService
    {
        private readonly MarsContext context;
        public UserService(MarsContext context)
        {
            this.context = context;
        }

        public ICollection<UserDTO> GetAllUsers()
        {
            return context.Users
                .Select(u => u.AsDTO())
                .ToList();
        }

        public ICollection<UserDTO> GetAllUsersDetail()
        {
            return context.Users
                .Include(u => u.PhoneNumbers)
                .Include(u => u.Addresses)
                .Include(u => u.Emails)
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

        public UserDTO? GetUserDetailById(Guid userId)
        {
            return context.Users
                .Include(u => u.PhoneNumbers)
                .Include(u => u.Addresses)
                .Include(u => u.Emails)
                .Include(u => u.Groups)
                .Where(u => u.Id == userId)
                .Select(u => u.AsDTO())
                .FirstOrDefault();
        }

        public UserDTO? CreateUser(UserDTO userDTO)
        {
            Guid userId = Guid.NewGuid();
            userDTO.Id = userId;
            foreach (AddressDTO address in userDTO.Addresses)
            {
                Guid addressId = Guid.NewGuid();
                address.Id = addressId;
            }
            foreach (PhoneNumberDTO phoneNumber in userDTO.PhoneNumbers)
            {
                Guid phoneNumberId = Guid.NewGuid();
                phoneNumber.Id = phoneNumberId;
            }
            foreach (EMailDTO emailDTO in userDTO.Emails)
            {
                Guid emailId = Guid.NewGuid();
                emailDTO.Id = emailId;
            }

            User user = userDTO.AsModel();
            context.Users.Add(user);
            context.SaveChanges();

            // Returns userDTO with new ids
            return GetUserDetailById(userId);
        }
    }
}