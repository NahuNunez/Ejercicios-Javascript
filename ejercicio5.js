// pedir tres numeros y mostrar cual numero es mayor 

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let num3 = parseInt(prompt("Ingrese el tercer numero"));

if (num1 > num2 && num1 > num3 ){
    alert(`${num1} es el mayor `);
}
else if (num2 > num1 && num2 > num3 ){
    alert(`${num2} es el mayor `);
}
else{
    alert(`${num3} es el mayor `);
}