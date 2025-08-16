//Cálculo de IMC

// Diseñar un algoritmo que calcule el IMC con peso (kg) y altura (m).
// Mostrar el resultado con su categoría:
// Menos de 18.5 → Peso bajo
// Entre 18.5 y 24.99 → Peso normal
// 25 o más → Sobrepeso

//Fórmula:
//imc = peso / (altura ** 2);

let peso; 

do {
    peso = parseInt(prompt("Ingrese su peso en Kg")) //primero pide ingresar un valor a la variable

    if (isNaN(peso) || peso <= 0 || peso >= 500 /* || peso !== Number.isInteger(peso) */ ) { // si el numero ingresado es menor o igual a 0 da la alerta;
        alert("Valores no aceptados")             // si es igual o mayor a 220 da la alerta, al igual que si el valor ingresado no es numerico
    }

} while (isNaN(peso) || peso <= 0 || peso >= 500); //la pregunta se repite mientras esté de algunos de estos valores 

//  si se quita la variable para declarar y el if el bucle toma ese valor y se repite infinitamente el bucle  


let altura;

do {
    altura = parseFloat(prompt("Ingrese su altura en metros")) 

    if (isNaN(altura) || altura <= 0 || altura >= 220) { 
        alert("Valores no aceptados")                    
    }

} while (isNaN(altura) || altura <= 0 || altura >= 220); 

let imc = peso / (altura ** 2)

/* if () {
    
} else {
    
} */
                                                    
