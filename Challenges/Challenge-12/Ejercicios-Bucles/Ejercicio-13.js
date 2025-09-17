//Solicitar calificaciones una por una, hasta que se ingrese un valor negativo.

let calificacion ;

do {
    calificacion = parseFloat(prompt("Ingrese una calificacion del 0 al 10"))

    if (calificacion >= 0 ) {
        alert(`Su calificacion es ${calificacion}`)
    } else {
        alert(`Su calificacion ${calificacion}, no es valida `)
    }
} while (calificacion >= 0);