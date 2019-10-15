using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Catalogo.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
       
        static Dictionary<int, Produto> produtos = new Dictionary<int, Produto>();
        List<Produto> lista = new List<Produto>();

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Produto>> Get()
        {
            lista = produtos.Values.ToList();
            return lista;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Produto> Get(int id)
        {
            if(produtos.ContainsKey(id)){
                return produtos[id];
            } 
           else{
               return new Produto();
           }
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Produto value)
        {
             produtos.Add(value.Codigo,value);
        }

        // PUT api/values/5
        // [HttpPut("{id}")]
        [HttpPut]
        public void Put([FromBody] Produto value)
        {
           produtos[value.Codigo]=value;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            produtos.Remove(id);
        }
    }
}
