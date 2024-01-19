using mars_api.Data.DTO.Groups;

namespace mars_api.Data.DTO.Users
{
    public class UserDTO
    {
        public Guid Id { get; set; }
        public string? Salutation { get; set; }
        public string? Prefix { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string? Suffix { get; set; }
        public List<EMailDTO> Emails { get; set; } = new List<EMailDTO>();
        public DateOnly? Birthday { get; set; }

        public List<PhoneNumberDTO> PhoneNumbers { get; set; } = new List<PhoneNumberDTO>();
        public List<AddressDTO> Addresses { get; set; } = new List<AddressDTO>();
        public List<Guid> Groups { get; set; } = new List<Guid>();
    }
}