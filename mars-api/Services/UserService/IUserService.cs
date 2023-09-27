using mars_api.Data.Models.Users;

namespace mars_api.Services.UserService
{
    public interface IUserService
    {
        public ICollection<User> GetAllUsers();
        public User? GetUserById(Guid userId);

    }
}
