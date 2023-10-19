using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace mars_api.Data.Models.Users
{
    public class Address
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Street { get; set; } = string.Empty;
        public string HouseNumber { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string PostalCode { get; set; } = string.Empty;
        public Guid? CountryId { get; set; }
        public Country Country { get; set; } = new Country();

    }
}
