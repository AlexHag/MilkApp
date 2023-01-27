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

    [HttpGet]
    [Route("Products")]
    public IActionResult Products(int? page = null, string? filter = null, string? search = null)
    {
        var query = _dbContext.Product.AsQueryable();

        if(!string.IsNullOrEmpty(filter))
        {
            query = query.Where(p => p.type == filter);
        }
        if(!string.IsNullOrEmpty(search))
        {
            query = query.Where(p => p.name.StartsWith(search));
        }

        var pageNumber = page ?? 1;
        var totalProducts = query.Count();
        var maxPage = (int)Math.Ceiling((double) totalProducts / 9);
        var products = query.Skip((pageNumber - 1) * 9).Take(9);
        var recived = products.Count();
        var response = new ProductDTO
        {
            Products = products.ToList(),
            Total = totalProducts,
            Recieved = recived,
            Page = pageNumber,
            MaxPage = maxPage
        };
        return Ok(response);
    }

    [HttpGet]
    [Route("Product/{id}")]
    public IActionResult OneProduct(string id)
    {
        var product = _dbContext.Product.Where(p => p.id == id).FirstOrDefault();
        if(product == null) return NotFound();
        return Ok(product);
    }
}