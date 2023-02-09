namespace LibraryBackend.RequestModels
{
    public class OrderPutRequest
    {
        public int Id { get; set; }
        public int OrderStatusId { get; set; }
    }

    public class OrderPostRequest
    {
        public int Id { get; set; }
        public int BookId { get; set; }
        public int UserId { get; set; }
    }
}
