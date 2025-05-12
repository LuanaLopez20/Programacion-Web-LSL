//Manipulacion del DOM
//Nos permite interactuar con un documento
//Modificar su estructura, estilo y contenido

//Seleccion de elementos por ID
let titulo = document.getElementById("titulo");
console.log(titulo.innerText);

//Por clase (Query Selector)
let parrafo = document.querySelector(".parrafo");

//Eventos (addEvenlistener, onClick, onChange)
let boton = document.getElementById("boton");
boton.addEventListener("click", function () {
  alert("Boton clickeado");
  //Modificacion de contenido
  titulo.innerHTML = "Nuevo titulo";
  parrafo.textContent = "Nuevo texto en el parrafo";
});
