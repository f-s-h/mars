namespace mars_api.Data.DTO.Users
{
    public class PhoneNumberDTO
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Number { get; set; } = string.Empty;
    }
}