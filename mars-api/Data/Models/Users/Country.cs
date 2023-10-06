using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace mars_api.Data.Models.Users
{
    public class Country
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
    }
}
