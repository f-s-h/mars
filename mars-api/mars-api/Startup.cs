using mars_api.Context;
using mars_api.Services.MailService;
using mars_api.Services.UserService;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;

namespace mars_api
{
    public static class Startup
    {
        public static WebApplication ConfigureServices(this WebApplicationBuilder builder) {

            builder.AddDB();
            builder.AddAuth();

            builder.Services.AddControllersWithViews();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.AddScopesService();

            return builder.Build();
        }

        private static void AddDB(this WebApplicationBuilder builder)
        {
            builder.Services.AddDbContext<MarsContext>((option) =>
            {
                option.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
                //option.UseNpgsql(builder.Configuration.GetConnectionString("marsDB"));
            });
        }

        private static void AddAuth(this WebApplicationBuilder builder)
        {
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.Authority = "https://localhost:5001";
                    //options.Audience = "mars-api";
                    options.TokenValidationParameters.ValidateAudience = false;
                    options.TokenValidationParameters.ValidTypes = new[] { "at+jwt" };
                });

            builder.Services.AddAuthorization(options =>
            {
                options.AddPolicy("ApiScope", policy =>
                {
                    policy.RequireAuthenticatedUser();
                    policy.RequireClaim("scope", "mars-api");
                });
            });
        }

        private static void AddScopesService(this WebApplicationBuilder builder)
        {
            builder.Services.AddScoped<IUserService, UserService>();
            builder.Services.AddScoped<IMailService, MailService>();
        }

        public static WebApplication ConfigurePipeline(this WebApplication app)
        {
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseCors(e => e.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
                app.UseSwaggerUI();
            }

            app.UseHttpLogging();
            app.UseHttpsRedirection();

            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllers().RequireAuthorization("ApiScope");
            app.MapControllers();
            return app;
        }
    }
}