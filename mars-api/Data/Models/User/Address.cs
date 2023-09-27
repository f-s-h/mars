using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace mars_api.Data.Models.User
{
    public class Address
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string? Street { get; set; }
        public string? HouseNumber { get; set; }
        public string? City { get; set; } 
        public string? PostalCode { get; set; } 
        public Guid? CountryId { get; set; }

    }
}
