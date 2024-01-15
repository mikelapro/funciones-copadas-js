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

// toUpperCase
// Convierte una cadena en letras mayúsculas.
const nombreCompleto4 = 'Mikaela Camila Somma';
const nombreCompletoMayuscula = nombreCompleto4.toUpperCase( nombreCompleto4 );

console.log( nombreCompletoMayuscula ); // MIKAELA CAMILA SOMMA

// toLowerCase
// Convierte una cadena en letras minúsculas.
const nombreCompletoMinuscula = nombreCompleto4.toLowerCase( nombreCompleto4 );

console.log( nombreCompletoMinuscula ); // mikaela camila somma

// trim
// Elimina los espacios en blanco de ambos lados de una cadena.
const nombreCompleto5 = '   Mikaela Camila Somma   ';

console.log( nombreCompleto5 ); // '   Mikaela Camila Somma   '
console.log( nombreCompleto5.trim() ); // 'Mikaela Camila Somma'
console.log( nombreCompleto5 )

// trimStart
// Elimina los espacios en blanco del principio de una cadena.
console.log( nombreCompleto5 ); // '   Mikaela Camila Somma   '
console.log( nombreCompleto5.trimStart() ); // 'Mikaela Camila Somma   '


// trimEnd
// Elimina los espacios en blanco del final de una cadena.
console.log( nombreCompleto5 ); // '   Mikaela Camila Somma   '
console.log( nombreCompleto5.trimEnd() ); // '   Mikaela Camila Somma'

// replace
// Reemplaza lo del primer parametro en la cadena (solo la primera aparición).
const nombreCompleto6 = 'Esteban Camila Somma';
console.log( nombreCompleto6.replace( 'Esteban', 'Mikaela' ) ); // Mikaela Camila Somma

let frase1 = 'Se tomo 1 helado';
//let frase2 = frase.replace( '1', 'un' );
frase1 = frase1.replace( '1', 'un' ); // [!] No es obligatorio asignarlo a una variable nueva.
console.log(frase1);

// replaceAll
// Reemplaza lo del primer parametro en toda la cadena.
let frase2 = 'a b c d e f';
let frase2a = frase2.replace( ' ', '' );
let frase2b = frase2.replaceAll( ' ', '' );
console.log( `${frase2} => ${frase2a}` ); // ab c d e f
console.log( `${frase2} => ${frase2b}` ); // abcdef

// includes
// Devuelve verdadero si una cadena contiene una cadena especificada. De lo contrario
// devuelve falso.
const nombreCompleto7 = 'Mikaela Camila Somma';

console.log( nombreCompleto7.includes( 'Camila' ) ); // true.
console.log( nombreCompleto7.includes( 'Esteban' ) ); // false.
