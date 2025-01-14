using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Orders
    {
        public int OrderId { get; set; }
        public string Username { get; set; }
        public string Product { get; set; }
        public string PhotoFileName { get; set; }
    }
}