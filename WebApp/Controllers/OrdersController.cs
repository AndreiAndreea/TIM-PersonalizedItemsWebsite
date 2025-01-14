using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Net.Http;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class OrdersController : ApiController
    {
        //// GET: api/Orders
        //public IHttpActionResult Get()
        //{
        //    string query = @"select OrderId, Username, Product, ProductFileName from dbo.Orders";
        //    DataTable table = new DataTable();

        //    //using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["."].ConnectionString))
        //    using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["StoreAppDB"].ConnectionString))
        //    using (var cmd = new SqlCommand(query, con))
        //    using (var da = new SqlDataAdapter(cmd))
        //    {
        //        cmd.CommandType = CommandType.Text;
        //        da.Fill(table);
        //    }

        //    // Check if the table is not empty
        //    if (table.Rows.Count > 0)
        //    {
        //        return Ok(table); // Return 200 OK with the table data
        //    }
        //    else
        //    {
        //        return NotFound(); // Return 404 Not Found if the table is empty
        //    }
        //}

        ////POST: api/Users
        //public IHttpActionResult Post(Orders order)
        //{
        //    try
        //    {
        //        if (order != null)
        //        {
        //            string query = @"insert into dbo.Orders values (@Username, @Product, @Phot0FileName)";

        //            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["StoreAppDB"].ConnectionString))
        //            using (var cmd = new SqlCommand(query, con))
        //            {
        //                cmd.Parameters.AddWithValue("@Username", order.Username);
        //                cmd.Parameters.AddWithValue("@Product", order.Product);
        //                cmd.Parameters.AddWithValue("@PhotoFileName", order.PhotoFileName);

        //                con.Open();
        //                cmd.ExecuteNonQuery();
        //            }

        //            return Ok("Added Successfully!");
        //        }
        //        else
        //        {
        //            return BadRequest("Invalid user data");
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return InternalServerError(ex);
        //    }
        //}
        }
}