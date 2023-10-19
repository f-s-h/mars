namespace mars_api.Data.Models.Users
{
    public class EMail
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Email { get; set; } = string.Empty;

        public static Boolean IsEmailValid(string Email)
        {
            // TODO
            return false;
        }
    }
}