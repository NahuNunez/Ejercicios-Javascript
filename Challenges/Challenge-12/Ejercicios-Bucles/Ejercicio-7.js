//Solicitar números y sumarlos hasta que el total sea igual o mayor que 100.


let total = 0;

let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));

while (total < 100) {
  
    total += numero1 + numero2;
    
}

alert(`¡Felicidades! El total final es: ${total}`);

