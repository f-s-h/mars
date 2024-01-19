using mars_api.Data.Models.Groups;

namespace mars_api.Data.Models.Users
{
    public class User
    {
        public Guid Id { get; set; }
        public string? Salutation { get; set; }
        public string? Prefix { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string? Suffix { get; set; }
        public DateOnly? Birthday { get; set; }
        public List<EMail> Emails { get; set; } = new List<EMail>();
        public List<PhoneNumber> PhoneNumbers { get; set; } = new List<PhoneNumber>();
        public List<Address>  Addresses { get; set; } = new List<Address>();
        public List<Group> Groups { get; set; } = new List<Group>();
    }
}
