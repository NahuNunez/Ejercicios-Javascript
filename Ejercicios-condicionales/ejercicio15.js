//si se elige °C o °F, convertir entre ambas y verificar si la temperatura es normal, fiebre o hipotermia

let medida;
let temperatura;

do {
    medida = prompt("Ingrese una medida de temperatura, Celsius o Fahrenheit").toLowerCase()

    if(medida !== "celsius" && medida !== "fahrenheit"){
        alert("Palabra incorrecta")
    }
}
while (medida !== "celsius" && medida !== "fahrenheit")


do {
    temperatura = parseFloat(prompt(`Ingrese la temperatura en °${medida}`))

    if(isNaN(temperatura)){ //isNaN (is Not A Number) determina si el valor pasado es el valor numérico NaN y devuelve falso si la entrada no es del tipo Number
        alert("El valor ingresado no es valido")
    }
} while (isNaN(temperatura));


let formula;
let diagnostico = "";

if (medida === "celsius") {
    formula = ( temperatura * 9/5) + 32 //grados celsius a fahrenheit
} else {
    formula = ( temperatura - 32) * 5/9 //grados fahrenheit a celsius
}


let tempC = medida === "celsius" ? temperatura : formula

if (tempC < 35) {
  diagnostico = "Hipotermia";
} else if (tempC <= 37.5) {
  diagnostico = "Temperatura normal";
} else {
  diagnostico = "Fiebre";
}

alert(`Temperatura ingresada: ${temperatura.toFixed(1)}°${medida}
Convertida: ${formula.toFixed(1)} °${medida === "celsius" ? "fahrenheit" : "celsius"}
Diagnóstico: ${diagnostico}`);











/* let temperatura = (prompt("Qué medida de temperatura quiere usar? \nCelsius o Fahrenheit?"))

let medida1 = "celsius"
let medida2 = "fahrenheit"

let medida = parseFloat(prompt("Ahora ingrese los grados")) */

/* let formula1 = ( medida * 9/5) + 32 */  /* //grados celsius a fahrenheit */
/* let formula2 = ( medida - 32) * 5/9 */ /* //grados fahrenheit a celsius */


 
/* if(temperatura === medida1 ){   
    alert(`Su temperatura es ${medida}°C y ${formula1}°F `)
}
else if(temperatura === medida2){
    alert(`Su temperatura es ${medida}°F y ${formula2}°C`)
}
else{
    alert("Datos no validos")
}  */

/* switch(medida){
    case medida >= 36,5:
    case medida <= 37:
        alert("Tiene una temperatura Normal")
        break
    default:
        break;
}
 */