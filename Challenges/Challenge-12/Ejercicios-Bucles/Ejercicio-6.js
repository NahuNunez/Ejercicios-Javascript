//El programa genera un numero aleatorio (entre 1 y 10) y el usuario debe adivinarlo.

let num = Math.floor(Math.random() * 10) + 1

console.log(num);


do {
    let num1 = parseInt(prompt("Ingrese un numero"));

    if (num1 === num) {
        alert("Acertaste al Numero!")
    } else {
        alert("No Acertaste :(")
    }

} while (confirm("Quiere volver a intentar?"));