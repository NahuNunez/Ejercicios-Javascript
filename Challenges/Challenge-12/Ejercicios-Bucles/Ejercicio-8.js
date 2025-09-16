//Pedir al usuario una palabra y contar cuántas vocales contiene.

//let palabra = prompt("Ingrese una palabra")
let palabra = "Hola"

//.length extrae el numero de caracteres de una cadena de texto
console.log(palabra.length);

//.substring extrae una parte de una variable indicando desde que lugar hasta cual otro lugar extraer.
console.log(palabra.substring(0, 10));

//.charAt nos muestra que caracter hay en una cadena de texto en este caso (0) nos muestra lo que contiene la primera posicion
console.log(palabra.charAt(0));


let palabra2 = "Hola".toLowerCase()

for(caracter = 0; caracter <= palabra2.length; caracter ++){
    if (
        palabra2.charAt(caracter) === "a" ||
        palabra2.charAt(caracter) === "e" ||
        palabra2.charAt(caracter) === "i" ||
        palabra2.charAt(caracter) === "o" ||
        palabra2.charAt(caracter) === "u" 
    ) {
        console.log(palabra2.charAt(caracter));
    }
}