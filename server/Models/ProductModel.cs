namespace server.Models;

public class Product {
    public string id { get; set; }
    public string name { get; set; }
    public string type { get; set; }
    public int storage { get; set; }
}

public class ProductDTO {
    public List<Product> Products { get; set; }
    public int Total { get; set;}
    public int Recieved { get; set;}
    public int Page { get; set; }
    public int MaxPage { get; set; }

}