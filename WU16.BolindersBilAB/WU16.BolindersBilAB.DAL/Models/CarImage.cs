﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WU16.BolindersBilAB.DAL.Models
{
    public class CarImage
    {
        [Key]
        public string FileName { get; set; }
        public int Priority { get; set; }

        [ForeignKey("Car")]
        public string CarId { get; set; }
        public virtual Car Car { get; set; }
    }
}
