// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.AspNetCore.Mvc.Rendering;
// using Microsoft.EntityFrameworkCore;
// using server.Models;

// namespace server.Controllers
// {
//     [ApiController]
//     [Route("[controller]")]
//     public class ProductController : Controller
//     {
//         private readonly DbContext _context;

//         public ProductController(DbContext context)
//         {
//             _context = context;
//         }

//         // GET: Product
//         [HttpGet]
//         public async Task<IActionResult> Index()
//         {
//               return _context.Product != null ? 
//                           View(await _context.Product.ToListAsync()) :
//                           Problem("Entity set 'DbContext.Product'  is null.");
//         }

//         // GET: Product/Details/5
//         [HttpGet("{id}")]
//         public async Task<IActionResult> Details(string id)
//         {
//             if (id == null || _context.Product == null)
//             {
//                 return NotFound();
//             }

//             var product = await _context.Product
//                 .FirstOrDefaultAsync(m => m.id == id);
//             if (product == null)
//             {
//                 return NotFound();
//             }

//             return View(product);
//         }

//         // GET: Product/Create
//         public IActionResult Create()
//         {
//             return View();
//         }

//         // POST: Product/Create
//         // To protect from overposting attacks, enable the specific properties you want to bind to.
//         // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
//         [HttpPost]
//         [ValidateAntiForgeryToken]
//         public async Task<IActionResult> Create([Bind("id,name,type,storage")] Product product)
//         {
//             if (ModelState.IsValid)
//             {
//                 _context.Add(product);
//                 await _context.SaveChangesAsync();
//                 return RedirectToAction(nameof(Index));
//             }
//             return View(product);
//         }

//         // GET: Product/Edit/5
//         public async Task<IActionResult> Edit(string id)
//         {
//             if (id == null || _context.Product == null)
//             {
//                 return NotFound();
//             }

//             var product = await _context.Product.FindAsync(id);
//             if (product == null)
//             {
//                 return NotFound();
//             }
//             return View(product);
//         }

//         // POST: Product/Edit/5
//         // To protect from overposting attacks, enable the specific properties you want to bind to.
//         // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
//         [HttpPost]
//         [ValidateAntiForgeryToken]
//         public async Task<IActionResult> Edit(string id, [Bind("id,name,type,storage")] Product product)
//         {
//             if (id != product.id)
//             {
//                 return NotFound();
//             }

//             if (ModelState.IsValid)
//             {
//                 try
//                 {
//                     _context.Update(product);
//                     await _context.SaveChangesAsync();
//                 }
//                 catch (DbUpdateConcurrencyException)
//                 {
//                     if (!ProductExists(product.id))
//                     {
//                         return NotFound();
//                     }
//                     else
//                     {
//                         throw;
//                     }
//                 }
//                 return RedirectToAction(nameof(Index));
//             }
//             return View(product);
//         }

//         // GET: Product/Delete/5
//         public async Task<IActionResult> Delete(string id)
//         {
//             if (id == null || _context.Product == null)
//             {
//                 return NotFound();
//             }

//             var product = await _context.Product
//                 .FirstOrDefaultAsync(m => m.id == id);
//             if (product == null)
//             {
//                 return NotFound();
//             }

//             return View(product);
//         }

//         // POST: Product/Delete/5
//         [HttpPost, ActionName("Delete")]
//         [ValidateAntiForgeryToken]
//         public async Task<IActionResult> DeleteConfirmed(string id)
//         {
//             if (_context.Product == null)
//             {
//                 return Problem("Entity set 'DbContext.Product'  is null.");
//             }
//             var product = await _context.Product.FindAsync(id);
//             if (product != null)
//             {
//                 _context.Product.Remove(product);
//             }
            
//             await _context.SaveChangesAsync();
//             return RedirectToAction(nameof(Index));
//         }

//         private bool ProductExists(string id)
//         {
//           return (_context.Product?.Any(e => e.id == id)).GetValueOrDefault();
//         }
//     }
// }
