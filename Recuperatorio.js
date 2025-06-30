// Ejercicio 1:
//🔹 Recorre el arreglo e imprimí en consola si cada producto es caro
//(precio mayor a 300) o barato.


const productos = [
  { nombre: "Notebook", precio: 800 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Teclado", precio: 50 },
];
productos.forEach( productos =>{
  if (productos.precio > 300) {
    console.log(`El ${productos.nombre} es caro - precio: ${productos.precio}`);
  } else {
    console.log(`El ${productos.nombre} es barato - precio: ${productos.precio}`);
  }
});

//🔹 Crea una función llamada obtenerPrecioPromedio que reciba el arreglo
//y devuelva el promedio de precios.

function obtenerPrecioPromedio(productos) {
  if (productos.length === 0) {
    return 0;  
  }

  const suma = productos.map(producto => producto.precio).reduce((total, precio) => total + precio, 0);
  return suma / productos.length;
}

const promedio = obtenerPrecioPromedio(productos);
console.log(`El precio promedio es: ${promedio}`);

