using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers;

[ApiController]
[Route("api")]
public class ProductsController : Controller
{
    private readonly DbContext _dbContext;
    public ProductsController(DbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    [HttpGet]
    [Route("All")]
    public List<Product> GetAll() {
        return _dbContext.Product.ToList();
    }

    // Can probably improve the filter method. Error when filtering for non-existing product. Why?
    [HttpGet]
    [Route("Products")]
    public List<Product> Products([FromQuery(Name = "page")] int page = 1, [FromQuery(Name = "filter")] string filter = "none") 
    {
        if(page < 1) page = 1;
        if(filter == "none") {
            int totalPages = (int)Math.Ceiling((double) _dbContext.Product.Count()) / 9;
            if(page > totalPages) page = totalPages;
            return _dbContext.Product.Skip((page - 1) * 9).Take(9).ToList();
        } else {
            int totalPages = (int)Math.Ceiling((double) _dbContext.Product.Where(p => p.type == filter).Count() / 9);
            if(page > totalPages) page = totalPages;
            return _dbContext.Product.Where(p => p.type == filter).Skip((page - 1) * 9).Take(9).ToList();
        }
    }
}