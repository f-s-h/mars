using mars_api.Data.DTO.Users;
using mars_api.Data.Models.Groups;
using mars_api.Data.Models.Users;
using System.Runtime.CompilerServices;

namespace mars_api.Data.DTO.Groups
{
    public static class AsDTOExtension
    {
        public static GroupDTO AsDTO(this Group group) {
            return new GroupDTO
            {
                Id = group.Id,
                Name = group.Name,
                Description = group.Description,
                Users = group.Users.Select(u => u.Id).ToList(),
            };
        }
    }
}
