using Duende.IdentityServer;
using Duende.IdentityServer.Models;
using IdentityModel;
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
            new ApiScope(name: "mars-api", displayName: "Mars API", userClaims: new List<string> { "role" }),
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
                    IdentityServerConstants.StandardScopes.OpenId,
                    IdentityServerConstants.StandardScopes.Profile,
                    "mars-api"
                },
                AllowedCorsOrigins = new List<string>
                {
                    "http://localhost:3000"
                }
            },
        };
}
