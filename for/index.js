// for ( let i = 1; i <= 10; i++ ) {
//     document.write( i + '<br>');
// }

// for ( let i = 10; i >= 1; i-- ) {
//     document.write( i + '<br>');
// }

//const frase = 'Mikaela';
//             0123456
//             L=7

// for ( let i = 0; i < frase.length; i++ ) {
//     document.write( '*' );
// }

// for ( let i = 0; i < frase.length; i++ ) {
//     document.write( frase[ i ] + '<br>' );
// }

// for ( let i = frase.length - 1; i >= 0; i-- ) {
//     document.write( frase[ i ] + '<br>' );
// }

// const cantidad = 9;
// // i=?   j=?
// for ( let i = 1; i <= cantidad; i++ ) {

//     for ( let j = 1; j <= i; j++ ) {
//         document.write( i );

//     }

//     document.write( '<br>' );
// }

for ( let i = 1; i <= 9; i++ ) {

    for ( let j = 1; j <= 9; j++ ) {
        document.write( `${i}×${j}= ${i * j}` + '<br>' );

    }
}
