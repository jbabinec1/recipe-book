using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using AspNetCore.Identity.Mongo;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;
using DataAccessLibrary.Models;
using Microsoft.IdentityModel.Tokens;

using System.IdentityModel.Tokens.Jwt;

using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using System.Text;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.FileProviders;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }


        // Action<IdentityOptions> setupIdentityAction, Action<MongoIdentityOptions> setupDatabaseAction

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            // Configure Identity MongoDB

             var connectionString = Configuration.GetSection("ConnectionStrings:Default").Value;
           // var connectionString = Configuration.GetConnectionString("ConnectionStrings:Default");

            services.AddIdentityMongoDbProvider<UserModel, RoleModel>(identityOptions =>
            {
                identityOptions.Password.RequiredLength = 6;
                identityOptions.Password.RequireLowercase = true;
                identityOptions.Password.RequireUppercase = true;
                identityOptions.Password.RequireNonAlphanumeric = true;
                identityOptions.Password.RequireDigit = true;
            }, options =>
            {
                options.ConnectionString = connectionString;
            });


            // Add Jwt Authentication
            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear(); // => remove default claims


            services.AddAuthentication(options =>
            {
                //Set default Authentication Schema as Bearer
                options.DefaultAuthenticateScheme =
                           JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme =
                           JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme =
                           JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(cfg =>
            {
                cfg.RequireHttpsMetadata = false;
                cfg.SaveToken = true;
                cfg.TokenValidationParameters =
                       new TokenValidationParameters
                       {
                           ValidIssuer = Configuration["JwtIssuer"],
                           ValidAudience = Configuration["JwtIssuer"],
                           IssuerSigningKey =
                        new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtKey"])),
                           ClockSkew = TimeSpan.Zero // remove delay of token when expire
                       };
            });






            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddControllersWithViews();
            services.AddCors(options => options.AddDefaultPolicy(
                builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));




            services.Configure<FormOptions>(o =>
            {

                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;

            });




        }


        




        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseCors();
            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Resources")),
                RequestPath = new PathString("/Resources")
            });
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
