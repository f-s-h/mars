using MailKit.Net.Smtp;
using MailKit.Security;
using mars_api.Context;
using mars_api.Data.DTO.Mail;
using mars_api.Data.Models.Users;
using mars_api.Services.UserService;
using Microsoft.EntityFrameworkCore;
using MimeKit;
using MimeKit.Text;

namespace mars_api.Services.MailService
{
    public class MailService: IMailService
    {
        private readonly IConfiguration config;
        readonly IUserService userService;
        private readonly MarsContext context;

        private SmtpClient smtp;

        public MailService(IConfiguration config, IUserService userService, MarsContext context) { 
            this.config = config;
            this.userService = userService;
            this.context = context;
        }

        public void SendBroadcastEmail(MailDTO request)
        {
            establishSmtpConnection();
            var users = context.Users.Include(u => u.Emails);
            foreach (User user in users)
            {
                var to = user.Emails.Select(e => e.Email).ToList();
                var subject = applyTags(request.Subject, user);
                var body = applyTags(request.Body, user);

                var email = CreateEmailMultipleRecipients(to, subject, body);

                if(email != null)
                {
                    smtp.Send(email);
                }
            }
            teardownSmtpConnection();
        }

        public void SendBroadcastGroupEmail(Guid groupId, MailDTO request)
        {
            var group = context.Groups
                .Where(g => g.Id.Equals(groupId))
                .FirstOrDefault();
            if(group == null)
            {
                return;
            }
            establishSmtpConnection();

            var users = group.Users.ToList();
            foreach (User user in users)
            {
                var to = user.Emails.Select(e => e.Email).ToList();
                var subject = applyTags(request.Subject, user);
                var body = applyTags(request.Body, user);

                var email = CreateEmailMultipleRecipients(to, subject, body);

                if (email != null)
                {
                    smtp.Send(email);
                }
            }

            teardownSmtpConnection();
        }

        public void SendEmail(MailDTO request)
        {
            var email = CreateEmail(request.To, request.Subject, request.Body);

            if(email != null)
            {
                establishSmtpConnection();
                smtp.Send(email);
                teardownSmtpConnection();
            }
        }

        private void establishSmtpConnection()
        {
            smtp = new SmtpClient();
            smtp.Connect(config.GetSection("EmailHost").Value, 587, SecureSocketOptions.StartTls);
            smtp.Authenticate(config.GetSection("EmailUsername").Value, config.GetSection("EmailPassword").Value);
        }

        private void teardownSmtpConnection()
        {
            smtp.Disconnect(true);
        }

        private MimeMessage CreateEmail(string to, string subject, string body)
        {
            if(to == null || subject == null || body == null)
            {
                // TODO throw error
                return null;
            }

            var email = new MimeMessage();

            email.From.Add(MailboxAddress.Parse(config.GetSection("Email").Value));
            email.To.Add(MailboxAddress.Parse(to));
            email.Subject = subject;
            email.Body = new TextPart(TextFormat.Html) { Text = body };

            return email;
        }

        private MimeMessage CreateEmailMultipleRecipients(List<string> to, string subject, string body)
        {
            if (to == null || to.Count == 0|| subject == null || body == null)
            {
                // TODO throw error
                return null;
            }

            var email = new MimeMessage();

            email.From.Add(MailboxAddress.Parse(config.GetSection("Email").Value));
            email.Subject = subject;
            email.Body = new TextPart(TextFormat.Html) { Text = body };

            foreach (string t in to) {
                email.To.Add(MailboxAddress.Parse(t));
            }

            return email;
        }

        private string applyTags(string message, User user)
        {
            message = message.Replace("##firstname##", user.FirstName);
            message = message.Replace("##lastname##", user.LastName);

            return message;
        }
    }
}
