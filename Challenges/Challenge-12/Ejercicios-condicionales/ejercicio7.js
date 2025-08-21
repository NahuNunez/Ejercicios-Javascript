//Ingresar un año y verificar si es bisiesto o no

let ano = parseInt(prompt("Ingrese un año"))

if (ano % 4 == 0){
    alert(`El año ${ano} es un año bisiesto`)
}
else {
    alert(`El año ${ano} no es un año bisiesto`)
}