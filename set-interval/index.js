let contador = 0;

// Ejecuta la función cada X milisegundos (o hasta que se haga clearInterval). 
function muestraMensaje() {
    console.log( 'Este mensaje se muestra cada segundo' );
    contador++;

    if ( contador == 5 ) {
        // Limpia el inmtervalo (no lo repite más).
        clearInterval( id );
    }
}

let id = setInterval( muestraMensaje, 1000 );
