using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Register.Models
{
    public class survey
    {
        [Key]
        [Required]
        public string Emp_id{ get; set; }

        [Required]  
        public string Email { get; set; }

        public int Attending { get; set; }

        public int PickupLocation { get; set; }

        public int PickupTime { get; set; }
    }
}
