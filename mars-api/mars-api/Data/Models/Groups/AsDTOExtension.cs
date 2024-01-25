using mars_api.Data.DTO.Groups;

namespace mars_api.Data.Models.Groups
{
    public static class AsDTOExtension
    {
        public static GroupDTO AsDTO(this Group group)
        {
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
