
document.writeln("1 USD = 1300 AR$ <br> <br>")

let moneda 
let moneda1 = "pesos"
let moneda2 = "dolares"

do {
    moneda = prompt("Que moneda desea convertir? \n Ingrese la palabra pesos o dolares").toLowerCase()
    if (moneda === moneda1) {
        alert("Usted eligió convertir Pesos a Dólares")
        document.writeln("Convertir Pesos a Dolares <br> <br>")
    } 
    else if (moneda === moneda2) {
        alert("Usted eligió convertir Dolares a Pesos")
        document.writeln("Convertir Dolares a Pesos <br> <br>")
    }
    else if (!isNaN(Number(moneda))) {
        alert("No se aceptan valores numericos. Ingrese valores válidos")
    }
    else  /* (moneda !== moneda1 || moneda !== moneda2 ) */ {
        alert("valores no admitidos")
    }

} while (!isNaN(Number(moneda))  || moneda === !moneda1 || moneda === !moneda2); //error arreglado, tenia que invertir valor con (!) las variables moneda1 y moneda2, y no el ===

///

let preciodolares = 1300

let cantidad = parseFloat(prompt("Ingrese la cantidad que quiera convertir"))

let cambio1 = cantidad / preciodolares  //cambio pesos a dolares
let cambio2 = cantidad * preciodolares //cambio dolares a pesos

let total = cambio1.toFixed(2) //el "cambio1.toFixed(2)" sirve para limitar la cantidad de decimales que aparece en el total 
let total2 = cambio2.toFixed(2)

if (moneda === moneda1) {
    document.writeln(`${cantidad} AR$ = ${total} USD`)
} 
else if (moneda === moneda2) {
    document.writeln(`${cantidad} USD = ${total2} AR$`)
} 

//