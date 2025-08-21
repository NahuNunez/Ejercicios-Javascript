//Solicitar un nombre de usuario y rol. Permitir o denegar acceso dependiendo si es "admin", "editor" o "invitado"

let rol1 = "admin"
let rol2 = "editor"
let rol3 = "invitado"

let usuario = prompt("Ingrese su usuario").toUpperCase()
let rol = prompt("Cual es su rol? (Admin, Editor o Invitado) ").toLowerCase()

if ( rol === rol1){
    alert("Tiene acceso");
}
else if (rol === rol2){
    alert("Tiene acceso limitado");
}
else if (rol === rol3){
    alert("No tiene acceso");
}
else {
    alert("Caracteres no válidos")
}