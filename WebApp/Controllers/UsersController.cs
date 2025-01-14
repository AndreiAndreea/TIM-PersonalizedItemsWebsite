using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.Http; // Use System.Web.Http namespace for ApiController
using System.Net;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class UsersController : ApiController
    {
        // GET: api/Users
        public IHttpActionResult Get()
        {
            string query = @"select UserId, Username, Userpassword from dbo.Users";
            DataTable table = new DataTable();

            //using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["."].ConnectionString))
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["StoreAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            // Check if the table is not empty
            if (table.Rows.Count > 0)
            {
                return Ok(table); // Return 200 OK with the table data
            }
            else
            {
                return NotFound(); // Return 404 Not Found if the table is empty
            }
        }

        //POST: api/Users
        public IHttpActionResult Post(Users user)
        {
            try
            {
                if (user != null)
                {
                    string query = @"insert into dbo.Users (Username, Userpassword) values (@Username, @Userpassword)";

                    using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["StoreAppDB"].ConnectionString))
                    using (var cmd = new SqlCommand(query, con))
                    {
                        cmd.Parameters.AddWithValue("@Username", user.Username);
                        cmd.Parameters.AddWithValue("@Userpassword", user.Userpassword);

                        con.Open();
                        cmd.ExecuteNonQuery();
                    }

                    return Ok("User added successfully!");
                }
                else
                {
                    return BadRequest("Invalid user data");
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }




    }
}
