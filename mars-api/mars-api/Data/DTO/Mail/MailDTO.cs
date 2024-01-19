namespace mars_api.Data.DTO.Mail
{
    public class MailDTO
    {
        public string? To { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Body {  get; set; } = string.Empty;
    }
}
