//ingresar números y calcular el promedio, repitiendo hasta que el usuario elija finalizar.

let num;
let num2;
let promedio;

do {
    num = parseInt(prompt("Ingrese un numero"))
    num2 = parseInt(prompt("Ingrese otro numero"))

    promedio = (num + num2) / 2

    alert(`El promedio de ${num} y ${num2} es: ${promedio}`)

} while (confirm("Desea continuar?"));