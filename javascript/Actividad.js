// EJERCICIO 1 // NIVEL UNO BASICO //
if (numero > 10) {
  console.log("El número es mayor a 10.");
}

// EJERCICIO 2 //
const numero1 = 5;
const numero2 = 13;
if (numero1 > numero2) {
  console.log("El número {numero1} es mayor que {numero2}.");
} else if (numero2 > numero1) {
  console.log("El número {numero2} es mayor que {numero1}.");
} else {
  console.log("Ambos números son iguales.");
}

// WHILE //
// EJERCICIO 1 //
let contador = 1;
while (contador <= 5) {
  console.log(contador);
  contador++;
}

// EJERCICIO 2 //
let number = 1;
let suma = 0;
while (number <= 4) {
  suma += number;
  number++;
}
console.log(`la suma del 1 al 4 es ${suma}`);

// FOR //
// EJERCICIO 1 //
for (let i = 0; i <= 4; i++) {
  console.log(i);
}

// EJERCICIO 2 //
let sum = 0;
for (let i = 0; i <= 4; i++) {
  sum += i;
}
console.log(`La suma de los números del 0 al 4 es: ${suma}`);

// NIVEL 2 DIFICULTAD MEDIA //
// EJERCICIO 1 //
const numero0 = 0; //cambiar este numero para probar//
if (numero0 < 0) {
  console.log("Negativo");
} else if (numero0 === 0) {
  console.log("Cero");
} else {
  console.log("Positivo");
}

// EJERCICIO 2 //
let contadorr = 0;
while (contadorr < 10) {
  contadorr++;
  if (contadorr === 5) {
    continue; // continue sigue con la ejecucion del bucle ,el break lo corta//
  }
  console.log(contadorr);
}

// NIVEL 3 // INTEGRADOR //
let numeros = [3, 7, 2, 8, 5, 6, 1, 9, 4, 0];
let sumamayores = 0;
let contadormenores = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 5) {
    sumamayores += numeros[i];
  } else {
    contadormenores++;
  }
}
console.log("Suma de números mayores a 5: " + sumamayores);
console.log("Cantidad de números menores o iguales a 5: " + contadormenores);
while (sumamayores >= 0) {
  console.log(sumamayores);
  sumamayores--;
}
