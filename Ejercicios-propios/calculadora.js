let moneda 
let moneda1 = "pesos"
let moneda2 = "dolares"

do {
    moneda = prompt("Que moneda desea convertir? \n Ingrese la palabra pesos o dolares").toLowerCase()
    if (moneda === moneda1) {
        alert("Usted eligió convertir Pesos a Dólares")
        document.writeln("Convertir Pesos a Dolares")
    } 
    else if (moneda === moneda2) {
        alert("Usted eligió convertir Dolares a Pesos")
        document.writeln("Convertir Pesos a Dolares")
    }
    else if (!isNaN(Number(moneda))) {
        alert("No se aceptan valores numericos. Ingrese valores válidos")
    }
    else if (moneda !== moneda1 || moneda !== moneda2 ) {
        alert("valores no admitidos")
    }

} while (!isNaN(Number(moneda))  || moneda != moneda1 || moneda != moneda2);

let 

/* switch (moneda) {
    case moneda === moneda1:
        
        break;

    default:
        break;
} */