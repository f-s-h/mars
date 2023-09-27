using Duende.IdentityServer.EntityFramework.Options;
using mars_api.Data.Models.Users;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace mars_api.Context
{
    public class MarsContext: ApiAuthorizationDbContext<User>
    {
        public virtual DbSet<User> User => Set<User>();
        public virtual DbSet<PhoneNumber> PhoneNumber => Set<PhoneNumber>();
        public virtual DbSet<Address> Address => Set<Address>();
        public virtual DbSet<Country> Country => Set<Country>();

        public MarsContext(DbContextOptions options, IOptions<OperationalStoreOptions> optionalStoreOptions)
            : base(options, optionalStoreOptions)
        {

        }
        
    }
}
