//si se elige °C o °F, convertir entre ambas y verificar si la temperatura es normal, fiebre o hipotermia

let temperatura = (prompt("Qué medida de temperatura quiere usar? \nCelsius o Fahrenheit?")).toLowerCase()

let medida1 = "celsius"
let medida2 = "fahrenheit"

let medida = parseFloat(prompt("Ahora ingrese los grados"))

let formula1 = ( medida * 9/5) + 32  //grados celsius a fahrenheit
let formula2 = ( medida - 32) * 5/9 //grados fahrenheit a celsius


if(temperatura === medida1 && medida >= 36,5 && medida <= 37  ){
    alert(`Su temperatura es ${medida}°C y ${formula1}°F \nTemperatura normal`)
}
else if(temperatura === medida2){
    alert(`Su temperatura es ${medida}°F y ${formula2}°C`)
}
else{
    alert("Datos no validos")
}

/* switch(medida){
    case 
} */
