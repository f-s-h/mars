using mars_api.Data.DTO.Users;

namespace mars_api.Services.UserService
{
    public interface IUserService
    {
        public ICollection<UserDTO> GetAllUsers();
        public ICollection<UserDTO> GetAllUsersDetail();
        public UserDTO? GetUserById(Guid userId);
        public UserDTO? GetUserDetailById(Guid userId);
        public UserDTO? CreateUser(UserDTO userDTO);
    }
}