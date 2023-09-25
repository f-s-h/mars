using Duende.IdentityServer.EntityFramework.Options;
using mars_api.Data.Models;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace mars_api.Context
{
    public class MarsContext: ApiAuthorizationDbContext<User>
    {
        public virtual DbSet<User> User => Set<User>();
            public MarsContext(DbContextOptions options, IOptions<OperationalStoreOptions> optionalStoreOptions)
                : base(options, optionalStoreOptions)
            {

            }
        
    }
}
