//Array de animales 

// Crear un array con 5 animales.
// Añadir 2 más (uno al inicio y otro al final).
// Eliminar el que está en la tercera posición.
// Mostrar la cantidad total de animales.

let array1 = ["leon", "vaca", "iguana", "perro", "gato"]

console.log(array1);
///
array1.splice(0,0,"conejo");

console.log(array1);
///
array1.push("cerdo");

console.log(array1);
///
array1.splice(3,1);

console.log(array1);
