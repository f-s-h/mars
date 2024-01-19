using mars_api.Data.Models.Users;

namespace mars_api.Data.Models.Groups
{
    public class Group
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<User> Users { get; set; } = new List<User>();
    }
}
