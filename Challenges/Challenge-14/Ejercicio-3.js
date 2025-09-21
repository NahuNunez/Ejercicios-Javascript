//Crea una función que reciba un array y elimine su primer elemento usando .shift().

function borrarUltimo(a) {
    a.shift()
    return a
}

let array = ["Arbol", "Medusa", "Cangrejo", "Persona"]

console.log(borrarUltimo(array));
