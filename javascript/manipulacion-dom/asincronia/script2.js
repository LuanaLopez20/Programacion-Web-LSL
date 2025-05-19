const button =document.getElementById("Boton");

button.addEventListener("click", () => {
setTimeout(()=> {
        alert("Fui presionado despues de 3 segundos");
        
    }, 3000); 
});
    
let contador = 0;
setInterval(() => {
    contador++;
    console.log("Contador:", contador);
}, 1000);

//metodos  para conseguir una api
//get, post, put ,delete


//fetch
//le vamos autilizar para conectarnos/consumir una api
//fetchurl , opciones
//opciones es un opcional ,para pasar un objecto que le diga que tipo
// de un metodo utiliza , encabezado , cuerpo, etc
