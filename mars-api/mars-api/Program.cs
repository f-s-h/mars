using mars_api;

var builder = WebApplication.CreateBuilder(args);

var app = builder.ConfigureServices().ConfiguirePipeline();

app.Run();