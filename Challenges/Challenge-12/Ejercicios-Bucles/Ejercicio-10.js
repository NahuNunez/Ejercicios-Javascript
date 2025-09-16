//Solicitar numeros y mostrar si estan en orden creciente.

do {
    let num1 = parseInt(prompt("Ingrese un numero"))
    let num2 = parseInt(prompt("Ingrese otro numero"))

    if (num1 < num2) {
        alert(`Sus numeros fueron ${num1} a ${num2} \n Su orden es creciente ` )
    } 
    else if (num1 > num2) {
        alert(`Sus numeros fueron ${num1} a ${num2} \n Su orden es decreciente ` )
    } 
    else  {
        alert(`Sus numeros fueron ${num1} a ${num2} \n Sus valores son iguales ` )
    }
    
} while (confirm("Quiere volver a intentar?"));


