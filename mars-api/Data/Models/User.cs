using Microsoft.AspNetCore.Identity;

namespace mars_api.Data.Models
{
    public class User : IdentityUser
    {
        public string? Title { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public DateOnly? Birthday { get; set; }

    }
}
