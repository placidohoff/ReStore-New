using System;
using API.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Edits made to run our seed data for our Products table on program start:
            var host = CreateHostBuilder(args).Build();
            using var scope = host.Services.CreateScope(); 
                //^^The 'using' tells C# to dispose of the variable and all its resources once it is out of scope... scope.Dispose()
            var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
            var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
                //^^We have a logger because if there is an exception, we can catch and log it. At this point in code, exceptions are not displayed on screen because the screen has not been called to render yet.. make sense?
            try
            {
                context.Database.Migrate();
                DbInitializer.Initialize(context);
            }
            catch(Exception ex)
            {
                logger.LogError(ex, "Problem migrating data");
            }

            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
