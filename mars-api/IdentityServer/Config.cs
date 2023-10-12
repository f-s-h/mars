using Duende.IdentityServer;
using Duende.IdentityServer.Models;
using static System.Net.WebRequestMethods;

namespace IdentityServer;

public static class Config
{
    public static IEnumerable<IdentityResource> IdentityResources =>
        new IdentityResource[]
        {
            new IdentityResources.OpenId(),
            new IdentityResources.Profile(),
        };

    public static IEnumerable<ApiScope> ApiScopes =>
        new ApiScope[]
        {
            new ApiScope("mars-api"),
            new ApiScope("scope2"),
        };

    public static IEnumerable<Client> Clients =>
        new Client[]
        {
            new Client
            {
                ClientId = "react-mars-client",
                ClientName = "React Mars-Client",
                RequireClientSecret = false,
                RequirePkce = true,
                AllowedGrantTypes = GrantTypes.Code,
                AllowAccessTokensViaBrowser = true,
                RequireConsent = false,
                AccessTokenLifetime = 60 * 30,
                RedirectUris = {"http://localhost:3000/authentication/callback"},
                PostLogoutRedirectUris = {"http://localhost:3000/"},
                AllowedScopes =
                {
                    "mars-api",
                    IdentityServerConstants.StandardScopes.OpenId,
                    IdentityServerConstants.StandardScopes.Profile,
                },
                AllowedCorsOrigins = new List<string>
                {
                    "http://localhost:3000"
                }
            },
        };
}
