using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace mars_api.Data.Models.User
{
    public class Country
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
    }
}
