using mars_api.Context;

namespace mars_api.Services
{
    public class UserService
    {
        private readonly MarsContext context;

        public UserService(MarsContext context)
        {
            this.context = context ?? throw new ArgumentNullException(nameof(context));
            //var s = $"{context.}";
            //var s = @"Hallo das ganze ist ein Test
            //          asdfasdf asdfasdf";
        }


    }
}
