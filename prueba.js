let unidad;
let temperatura;

// Pedir unidad válida
do {
  unidad = prompt("¿La temperatura está en °C o °F? Escribí C o F").toUpperCase();

  if (unidad !== "C" && unidad !== "F") {
    alert("Unidad inválida. Escribí 'C' para Celsius o 'F' para Fahrenheit.");
  }
} while (unidad !== "C" && unidad !== "F");



// Pedir temperatura válida
do {
  temperatura = parseFloat(prompt(`Ingresá la temperatura en °${unidad}`));

  if (isNaN(temperatura)) {
    alert("El valor ingresado no es un número válido.");
  }
} while (isNaN(temperatura));



// Convertir y diagnosticar
let temperaturaConvertida;
let diagnostico = "";

if (unidad === "C") {
  temperaturaConvertida = (temperatura * 9/5) + 32; // Celsius a Fahrenheit
} else {
  temperaturaConvertida = (temperatura - 32) * 5/9; // Fahrenheit a Celsius
}




let tempC = unidad === "C" ? temperatura : temperaturaConvertida;

if (tempC < 35) {
  diagnostico = "Hipotermia";
} else if (tempC <= 37.5) {
  diagnostico = "Temperatura normal";
} else {
  diagnostico = "Fiebre";
}



// resultados
alert(`Temperatura ingresada: ${temperatura.toFixed(1)}°${unidad}
Convertida: ${temperaturaConvertida.toFixed(1)}°${unidad === "C" ? "F" : "C"}
Diagnóstico: ${diagnostico}`);