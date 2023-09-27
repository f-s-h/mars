using Duende.IdentityServer.Extensions;
using mars_api.Context;
using mars_api.Data.Models.Users;

namespace mars_api.Services.UserService
{
    public class UserService: IUserService
    {
        private readonly MarsContext context;

        public UserService(MarsContext context)
        {
            this.context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public ICollection<User> GetAllUsers()
        {
            return context.Users
                .ToList();
        }

        // TODO not working
        public User? GetUserById(Guid userId)
        {
            var user = context.Users
                .ToList()
                .Find(u => u.Id.Equals(userId));

            return user;
        }
    }
}
