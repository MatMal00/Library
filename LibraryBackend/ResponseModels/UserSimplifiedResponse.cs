﻿using LibraryBackend.Models;

namespace LibraryBackend.ResponseModels
{
    public class UserSimplifiedResponse
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
    }
}
