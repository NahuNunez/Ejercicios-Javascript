/* Estación del año

Mostrar la estación correspondiente dependiendo del valor de la variable mes (Primavera, Otoño, Verano, Invierno).  */

let mes = prompt("Ingrese el numero del 1 al 12 dependiendo el mes en el que estas")

switch (mes) {
    case "12":
    case "1":
    case "2":
        alert("Es Verano")
        break;
    case "3":
    case "4":
    case "5":
        alert("Es Otoño")
        break;
    case "6":
    case "7":
    case "8":
        alert("Es Invierno")
        break;
    case "9":
    case "10":
    case "11":
        alert("Es Primavera")
        break;
    default:
        alert("Ingresá un cáracter válido")
        break;
}

