using mars_api.Data.DTO.Mail;

namespace mars_api.Services.MailService
{
    public interface IMailService
    {
        void SendEmail(MailDTO request);
        void SendBroadcastEmail(MailDTO request);
        void SendBroadcastGroupEmail(Guid groupId, MailDTO request);
    }
}
