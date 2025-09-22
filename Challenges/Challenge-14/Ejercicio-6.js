//Crea una función que reciba un array y una posición, y elimine el elemento con .splice().

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let posicion = "1" //prompt("Ingrese una posicion para eliminar")


function EliminarPosicion(a,b) {

    a.splice(b-1 , 1);

    return a
    
}

console.log(EliminarPosicion(array,posicion));






