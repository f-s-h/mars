namespace mars_api.Data.DTO.Users
{
    public class EMailDTO
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Email { get; set; } = string.Empty;
    }
}
