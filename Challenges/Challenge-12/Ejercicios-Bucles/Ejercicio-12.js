//Pedir una contraseña al usuario hasta que coincida con la correcta.

let contraGuardada = "elcapo123"
let contraIngresada;

do {
    contraIngresada = prompt("Ingresa tu contraseña")

    if (contraIngresada != contraGuardada) {
        alert("Acceso Denegado")
    } else {
        alert("Acceso Concedido")
    }

} while (contraIngresada != contraGuardada);