﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
namespace LibraryBackend.Models
{
    public partial class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string BookDescription { get; set; }
        public string ImageUrl { get; set; }
        public int CategoryId { get; set; }
        public decimal Price { get; set; }
        public int? Quantity { get; set; }
        public bool IsRentable { get; set; }
        public string Rating { get; set; }   
    }
}