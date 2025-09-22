//Crea una función que devuelva un número aleatorio entre 1 y 10 usando Math.random() y Math.floor().

let numero = ""

function NumRandom(a) {
    a = Math.random() * 10 
    a = Math.floor(a)
    return a
}

let nuevo = NumRandom(numero)

console.log(`Su numero random del 1 al 10 es: ${nuevo}`);
