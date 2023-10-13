namespace mars_api.Data.DTO.Users
{
    public class AddressDTO
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Street { get; set; } = string.Empty;
        public string HouseNumber { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string PostalCode { get; set; } = string.Empty;
        public Guid? CountryId { get; set; }
        public CountryDTO Country { get; set; } = new CountryDTO();
    }
}