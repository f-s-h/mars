namespace mars_api.Data.DTO.Users
{
    public class UserDTO
    {
        public Guid Id { get; set; }
        public string? Email { get; set; } = string.Empty;
        public string? Title { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public DateOnly? Birthday { get; set; }

        public List<PhoneNumberDTO> PhoneNumbers { get; set; } = new List<PhoneNumberDTO>();
        public List<AddressDTO> Addresses { get; set; } = new List<AddressDTO>();
    }
}