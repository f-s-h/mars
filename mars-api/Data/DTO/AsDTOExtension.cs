using mars_api.Data.DTO.Users;
using mars_api.Data.Models.Users;

namespace mars_api.Data.DTO
{
    public static class AsDTOExtension
    {
        public static UserDTO AsDTO(this User user) {
            return new UserDTO()
            {
                Id = Guid.Parse(user.Id),
                UserName = user.UserName,
                Email = user.Email,
                Title = user.Title,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Birthday = user.Birthday,
            };
        }
    }
}
