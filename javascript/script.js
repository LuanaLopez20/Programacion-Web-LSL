//Lenguaje de programacion client-side
//Actualmente orientado a funciones

//Variables

var misVariables = "Hola soy una variable con var"; //No se usa
let misVariables2 = "Hola soy una variable con let"; //Solo vive en el scope declar
const misVariables3 = "Constante no cambian los valores";

const hola = "Hola lu";
console.log("Hola luuuu"); //Es el equivalante a print

//Funciones
function myfuction(variable) {
  //La funcion tiene una declaracion
  //En los parentesis van los parametros
  console.log(variable);
  return variable; //En general las funciones van a retonar algo
}

//Funcion flecha
const myArrowFuction = (variable) => variable;

//Ejecucion de una funcion
function myfuction() {
  return;
}

const variable = true;
if (variable) {
  console.log(true);
} else {
  console.log(false);
}

//Condicional temario sirve solo para dos clausulas
variable ? console.log(true) : console.log(false);

//Arreglos o arrays
//Los arreglos son las litas de python
const arr = (1, true, "Hola mundo", 0, 1, 2);

console.log("Esta es la posicion 1 de la lista", arr[1]);

//Objetos
//Los objetos son como los diccionarios de python
const objeto = {
  clave: "valor",
};

//Los objetos estan compuestos por clave valor
console.log(objeto.clave);

//Bucle for
const arrayNumeros = (1, 2, 3);
for (let i = 0; i < arrayNumeros.length; i++) {
  console.log(arrayNumeros[i]);
}
