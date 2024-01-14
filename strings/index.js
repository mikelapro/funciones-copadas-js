// substring
// Devuelve un pedacito de un string.El primer parámetro es el índice desde donde comienza 
// (desde) y el segundo parámetro es el índice de donde queremos que termine (hasta).
const nombreCompleto = 'Mikaela Camila Somma';
const segundoNombre = nombreCompleto.substring( 8, 14 );

console.log( segundoNombre ); // Camila.

// substr
// Devuelve un pedacito de un string.El primer parámetro es el índice desde donde comienza 
// (desde) y el segundo parámetro es que cantidad de caracteres queremos que devuelva.
const nombreCompleto2 = 'Mikaela Camila Somma';
const segundoNombre2 = nombreCompleto.substr( 8, 6 );

console.log( segundoNombre2 ); // Camila.

// indexOf
// Nos devuelve el índice del primer caracter o palabra especificada por parámetro.
// Tiene un segundo parámetro en donde le podemos decir a partir de qué índice comienza a 
// buscar, por ejemplo, si queremos buscar la segunda o tercera a dentro de un texto.
const nombreCompleto3 = 'Mikaela Camila Somma';
const primeraA = nombreCompleto3.indexOf( 'a' );

console.log( primeraA ); // 3.

const segundaA = nombreCompleto3.indexOf( 'a', primeraA + 1 );

console.log( segundaA ); // 6.

// Donde empieza la palabra 'Somma'.
const apellido = nombreCompleto3.indexOf( 'Somma' );

console.log( apellido ); // 15.

// lastIndexOf
// Nos devuelve el índice del último caracter o palabra especificada por parámetro.
const terceraA = nombreCompleto3.lastIndexOf( 'a' );

console.log( terceraA ); // 19.


// split
// Corta un string convirtiendolo a array.
const numeros = 'uno dos tres cuatro cinco';

const arrayNumeros = numeros.split( ' ' );
let numero = arrayNumeros[3]; // cuatro.
console.log( numero );

for ( let i = 0; i < arrayNumeros.length; i++ ) {
    console.log( arrayNumeros[i] );
    // uno
    // dos
    // tres
    // cuatro
    // cinco

}

// join (función de array) 
// Sive para juntar todos los elementos de un array en un string separados por el caracter
// que especifiquemos.
const arrayFrutas = ["Banana", "Orange", "Apple", "Mango"];
const frutas = arrayFrutas.join( '|' );

console.log( frutas );
