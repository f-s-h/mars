using mars_api.Data.Models.Groups;

namespace mars_api.Data.DTO.Groups
{
    public static class AsModelExtension
    {
        public static Group AsModel(this GroupDTO group)
        {
            return new Group()
            {
                Id = group.Id,
                Name = group.Name,
                Description = group.Description,
            };
        }
    }
}
