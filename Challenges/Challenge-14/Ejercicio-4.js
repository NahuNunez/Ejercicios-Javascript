//Crea una función que reciba un texto y una letra, y cuente cuántas veces aparece usando un for.

let texto = "colaboracion"    //a

let letra = "o"  //prompt("Ingrese una letra")  //b
 
function CantidadLetras(a,b) {

    let contador = 0;

    for(let i = 0 ; i < a.length ; i++ ){

        if (a[i] === b) {
            
            contador++
        }
    }

    return contador;
}

console.log(CantidadLetras(texto, letra));



//let contador = 0;

//Es una variable numérica que empieza en 0.
//Se usa para acumular algo: en este caso, cuántas veces aparece la letra.
//Cada vez que encontramos una coincidencia (if (a[i] === b)), le sumamos 1:
//Así, el contador va guardando el total de coincidencias encontradas.


//El for es un bucle que repite el bloque de código hasta que se cumple una condición.

//for (let i = 0; i < a.length; i++) {
    // código que se repite
//}


//Se divide en 3 partes:


//Inicialización → let i = 0;

//  Se crea una variable i que empieza en 0.
//  i es el índice, representa la posición actual dentro del string (o array).


//Condición → i < a.length;

//  El bucle se ejecuta mientras i sea menor que la longitud del string (a.length).
//  Ejemplo: si a = "colaboracion", entonces a.length = 12.
//  Eso significa que el bucle va de i = 0 hasta i = 11.


//Incremento → i++

//  Después de cada vuelta, aumenta i en 1.
//  Esto hace que avancemos de una letra a la siguiente.