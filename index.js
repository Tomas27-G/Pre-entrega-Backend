
const [,,method,endpoint] = process.argv;
  

const GetProductos = async (resource) => {
  try {
    const resultado = await fetch(`https://fakestoreapi.com/${resource}`);
   const datos = await resultado.json();

   console.log(datos);
  } catch (error) {
    console.log("Error al obtener los productos:", error);
  }
}

const  PostProductos = async (productos) => {
  try {
    const resultado = await fetch('https://fakestoreapi.com/products', {
    method:"POST",
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(productos)
  });
  const datos = await resultado.json()
  console.log(datos);
  } catch (error) {
    console.log("Error al crear el producto:", error);
  }
  
}
const  DeleteProductos = async (resource) => {
  try {
    const resultado = await fetch(`https://fakestoreapi.com/${resource}`, {
    method:"DELETE",

  });
  const datos = await resultado.json()
  console.log(datos);
  } catch (error) {
    console.log("Error al eliminar el producto:", error);
  }
  
}

const FuncionPrincipal = async () => {  
  if (method == "GET" && endpoint.startsWith("products")) {
   await GetProductos(endpoint) 
   console.log("Productos traídos con éxito");
   
}
else if (method == "POST" && endpoint.startsWith("products")) {
    const product = {  title: 'Remera negra', price: "29.99", category: "men's clothing" };
    PostProductos(product)
} 
else if (method == "DELETE" && endpoint.startsWith("products")) {
    await DeleteProductos(endpoint)
    console.log("Producto eliminado con éxito");
}
}

FuncionPrincipal()


