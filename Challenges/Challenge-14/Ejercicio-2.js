//Crea una función que reciba un array y un elemento, y lo agregue al final usando .push().

let array = ["Duende", "Princesa", "Esqueletos", "Gigante"]

let elemento2 = "P.E.K.K.A" //prompt("Ingrese una carta de clash royale")


function AgregarElemento(a,b) {

    b.push(a)

    return b //devuelve el arreglo ya modificado.
}

console.log(AgregarElemento(elemento2,array));






