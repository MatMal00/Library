﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace LibraryBackend.Models
{
    public partial class Bestseller
    {
        public int Id { get; set; }
        public int BookId { get; set; }

        public virtual Book Book { get; set; }
    }
}