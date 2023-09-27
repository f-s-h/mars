using mars_api.Data.DTO.User;

namespace mars_api.Services.UserService
{
    public interface IUserService
    {
        public ICollection<UserDTO> GetAllUsers();
        public UserDTO? GetUserById(Guid userId);

    }
}
