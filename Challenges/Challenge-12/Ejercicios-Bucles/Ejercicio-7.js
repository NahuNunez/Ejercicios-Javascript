//Solicitar números y sumarlos hasta que el total sea igual o mayor que 100.


let total = 0;

let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));

//El bucle while ejecuta repetidamente un bloque de código mientras una condición específica sea verdadera

//meintras el total de numero1 + numero2 sea menor que 100 se vuelve a repetir la operacion
while (total < 100) {
  
    //esta es la operacion que se repite
    total += numero1 + numero2;
}

alert(`El total final es: ${total}`);

