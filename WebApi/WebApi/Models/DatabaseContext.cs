using System.Data.Entity;

namespace WebApi.Models
{
    public class DatabaseContext: DbContext
    {
        public DatabaseContext(): base("name=userDB")
        {

        }

        public DbSet<User> Users { get; set; }
    }
}