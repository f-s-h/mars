using mars_api.Data.Models.Users;
using Microsoft.EntityFrameworkCore;

namespace mars_api.Context
{
    public class MarsContext : DbContext
    {
        public virtual DbSet<User> Users => Set<User>();
        public virtual DbSet<PhoneNumber> PhoneNumbers => Set<PhoneNumber>();
        public virtual DbSet<Address> Addresses => Set<Address>();
        public virtual DbSet<Country> Countries => Set<Country>();
        public virtual DbSet<EMail> Email => Set<EMail>();

        public MarsContext(DbContextOptions options)
            : base(options){ }
    }
}