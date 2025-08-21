//comprobar si un numero es par o impar

let num = parseInt(prompt("ingrese su numero para ver si es par o impar"));

if (num % 2 == 0){      /* % o MOD es el resto de la division */
    alert("Su numero es par");
}
else{
    alert("Su numero es impar");
}