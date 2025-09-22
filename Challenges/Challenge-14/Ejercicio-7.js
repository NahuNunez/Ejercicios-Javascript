//Crea una función que reciba dos números y un operador (+, -, *, /). Devuelva el resultado de la operación. Si el operador no es válido, mostrar error.

let numero = parseInt(prompt("Ingrese un numero"))  //a

let numero2 = parseInt(prompt("Ingrese otro numero")) //b

let operacion = prompt("Que operacion desea hacer? \nIngrese alguno de estos caracteres (+, -, *, /) ")  //c


function Calculadora(a,b,c) {

    let resultado = ""
    //let error = ""

    switch (c) {
        case "+":
            resultado = (a + b); 
            break;
        case "-":
            resultado = (a - b); 
            break;
        case "*":
            resultado = (a * b); 
            break;
        case "/":
            resultado = (a / b); 
            break;
        default:
            alert("Error, Ingrese un caracter valido")
            break;
    }
    return resultado 
}

//console.log(Calculadora(numero,numero2,operacion));

let total = Calculadora(numero,numero2,operacion)

alert(`${numero} ${operacion} ${numero2} = ${total}`)