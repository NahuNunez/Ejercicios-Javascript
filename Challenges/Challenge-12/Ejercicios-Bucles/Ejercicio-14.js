//Mostrar un mensaje de confirmación y repetir mientras el usuario diga “no”.

let pregunta;

do {
    pregunta = prompt("Desea continuar?").toLowerCase()

    /* if (pregunta === "si") {
        
    } else {
        
    } */
} while (pregunta === "no");