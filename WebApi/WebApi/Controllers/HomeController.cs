using WebApi.Models;
using System.Web.Mvc;

namespace WebApi.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            DatabaseContext db = new DatabaseContext();
            db.Users.Add(new User("Bi", "Bo", "BiBo"));
            db.SaveChanges();

            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
