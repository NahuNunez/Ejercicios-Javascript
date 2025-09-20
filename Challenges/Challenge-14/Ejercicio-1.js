//Crea una función que reciba un texto y muestre cuántos caracteres tiene usando ".length".

let palabra = "colaboracion" //prompt("Ingrese una palabra").toUpperCase()

function caracteres(palabra) {
    return palabra.length
}

console.log(caracteres(palabra));

console.log(`Su palabra ${palabra} tiene ${caracteres(palabra)} caracteres`)

