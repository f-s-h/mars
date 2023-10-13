﻿namespace mars_api.Data.Models.Users
{
    public class User
    {
        public Guid Id { get; set; }
        public string? Email { get; set; }
        public string? Title { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public DateOnly? Birthday { get; set; }
    }
}
