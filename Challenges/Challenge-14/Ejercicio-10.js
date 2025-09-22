//Crea una función que reciba un texto y devuelva su primera letra con .charAt().

let palabra = "Vengadores" //prompt("Ingrese una palabra")

function PrimerLetra(palabra) {

    let nuevo = palabra.charAt(0)

    return nuevo
}

let nueva = PrimerLetra(palabra)

console.log(`La primer letra de su palabra "${palabra}" es "${nueva}" `);
