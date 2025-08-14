//Calcular el impuesto a pagar segun rangos de ingreso 

let ingreso = parseInt(prompt("Cuales son sus Ingresos mensuales?"))

let impuesto = (ingreso/100) * 25
let impuesto2 =  (ingreso/100) * 35
let impuesto3 =  (ingreso/100) * 50

let total = (ingreso + impuesto)
let total2 = (ingreso + impuesto2)
let total3 = (ingreso + impuesto3)

if (ingreso >= 1 && ingreso <= 1000){
    alert(`Su ingreso ($${ingreso}) le corresponde un 25% de impuestos.\nEl total es = $${total} `)
}
else if (ingreso >= 1001 && ingreso <= 5000){
    alert(`Su ingreso ($${ingreso}) le corresponde un 35% de impuestos.\nEl total es = $${total2} `)
}
else if (ingreso >= 5001 && ingreso <= 10000){
    alert(`Su ingreso ($${ingreso}) le corresponde un 50% de impuestos.\nEl total es = $${total3} `)
}
else{
    alert("El valor ingresado no está registrado")
}