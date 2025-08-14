let compra = parseInt(prompt("Ingrese el costo de su compra"))
let descuento = compra * 0.10
let total = (compra - descuento)

if (compra <= 100){
    alert(`Total de su compra es $${compra}, No tiene descuento`)
}
else if (compra >= 100){
    alert(`el total de su compra ($ ${compra} ) con su 10% de descuento es = ${total}`)
}