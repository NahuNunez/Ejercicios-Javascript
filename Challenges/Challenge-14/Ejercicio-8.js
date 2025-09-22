//Crea una función que reciba un array y devuelva una parte usando .slice().

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let parte1 = 0 //prompt("")

let parte2 = 4 //prompt("")

function Parte(a,b,c) {

    let nuevoArray = a.slice(b,c)

    console.log(nuevoArray);
    
    return nuevoArray
}

let ArrayNuevo = Parte(array,parte1,parte2)

console.log(`Del Array [${array}] , quiso sacar desde la posicion ${parte1} hasta la posicion ${parte2}`);

console.log(`El nuevo Array queda como [${ArrayNuevo}]`);
