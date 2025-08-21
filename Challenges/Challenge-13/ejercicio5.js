/* Switch de idiomas

Usar un switch para imprimir un saludo diferente según el idioma (mínimo 7 idiomas). */

let idioma = prompt("Escriba un idioma").toLowerCase() /* .ToLowerCase() toma caracteres en mayusculas y las pasa a minusculas */

switch (idioma) {
    case "español":
        alert("Hola")
        break;
    case "ingles":
        alert("Hello")
        break;
    case "portugues":
        alert("Olá")
        break;
    case "frances":
        alert("Bonjour")
        break;
    case "aleman":
        alert("Hallo")
        break;
    case "japones":
        alert("Konnichiwa")
        break;
    case "chino":
        alert("Ni Hao")
        break;
    default:
        alert("Ingresá un idioma resgistrado")
        break;
}