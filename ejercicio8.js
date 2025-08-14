let calificacion = parseInt(prompt("Ingrese la calificacion del alumno"))

if (calificacion <=5 ){
    alert("Esta Desaprobado")
}
else if (calificacion >=6 && calificacion <=9){
    alert("Esta Aprobado")
}
else if (calificacion ===10 ){
    alert("Calificacion Excelente, Aprobado")
}
else {
    alert("Nota no valida")
}

/* ejemplo con switch */

/* let calificacion = parseInt(prompt("Ingrese la nota del alumno "))

switch (calificacion) {
    case 0:
        alert("PESIMA NOTA!!!")
        break;
    case 1:
        alert("Desaprobao")
        break;
    case 2:
        alert("Desaprobao")
        break;
    case 3:
        alert("Desaprobao")
        break;
    case 4:
        alert("Desaprobao")
        break;
    case 5:
        alert("Desaprobao")
        break;
    case 6:
        alert("Aprobao")
        break;
    case 7:
        alert("Aprobao")
        break;
    case 8:
        alert("Aprobao")
        break;
    case 9:
        alert("Aprobao")
        break;       
    case 10:
        alert("Aprobao Excelente")
        break;
    default:
        alert("Dato no valido")
        break;
} */