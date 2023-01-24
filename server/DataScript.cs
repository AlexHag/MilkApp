// using server.Models;
// using System.Text.Json;

// namespace server.Script;
// public class DataScript 
// {
//     private readonly DbContext _dbContext;
//     public DataScript(DbContext dbContext)
//     {
//         _dbContext = dbContext;
//     }

//     public void PopulateMilk() {

//         var jsonString = File.ReadAllText("../milk.json");
//         var data = JsonSerializer.Deserialize<List<Product>>(jsonString);
//         _dbContext.Product.AddRange(data);
//         _dbContext.SaveChanges();
//     }
// }