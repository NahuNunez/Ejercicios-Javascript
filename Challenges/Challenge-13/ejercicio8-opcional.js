//Diseñar un algoritmo que obtenga el mes y día de nacimiento y muestre el signo zodiacal

let mes

do {
    mes = prompt("Ingresa el mes de su nacimiento").toLowerCase()
    if (!isNaN(Number(mes))) {   //el simbolo ( ! ) antes de isNaN invierte el resultado booleano
        alert(`"${mes}" no es válido. Ingrese caracteres validos`)
    }else{
        alert("Perfecto")
    }
} while (!isNaN(Number(mes)));

let dia 

do {
    dia = prompt("Ingresa el dia de su nacimiento")
    if (isNaN(Number(dia)) || dia <=0 || dia >=32 ) {   
        alert(`"${dia}" no es válido. Ingrese un dia calendario valido`)
    }else{
        alert("Perfecto")
    }
} while (isNaN(Number(dia)) || dia <= 0 || dia >= 32);

//Capricornio 22/Diciembre al 19/Enero 
if (mes === "diciembre" && dia >= 22 && dia <=31) { //diciembre tiene 31 dias
    alert("Su signo zodiacal es Capricornio")
}
else if(mes === "enero" && dia >= 1 && dia <=19){
    alert("Su signo zodiacal es Capricornio")
}

//Acuario 20/Enero al 18/Febrero
else if (mes === "enero" && dia >= 20 && dia <=31 ){ //enero tiene 31 dias
    alert("Su signo zodiacal es Acuario")
}
else if (mes === "febrero" && dia >= 1 && dia <=18 ){
    alert("Su signo zodiacal es Acuario")
}

//Piscis 19/Febrero al 20/Marzo
else if (mes === "febrero" && dia >= 19 && dia <= 28 ){ //febrero tiene 28 dias
    alert("Su signo zodiacal es Piscis")
}
else if (mes === "marzo" && dia >= 1 && dia <= 20 ){
    alert("Su signo zodiacal es Piscis")
}

//Aries 21/Marzo al 19/Abril
else if (mes === "marzo" && dia >= 21 && dia <= 31 ){ //marzo tiene 31 dias
    alert("Su signo zodiacal es Aries")
}
else if (mes === "abril" && dia >= 1 && dia <= 19 ){
    alert("Su signo zodiacal es Aries")
}
//Tauro        20/Abril al 20/Mayo
else if (mes === "abril" && dia >= 20 && dia <= 30 ){ //abril tiene 30 dias
    alert("Su signo zodiacal es Tauro")
}
else if (mes === "mayo" && dia >= 1 && dia <= 20 ){
    alert("Su signo zodiacal es Tauro")
}
//Geminis      21/Mayo al 20/Junio
else if (mes === "mayo" && dia >= 21 && dia <= 31 ){ //mayo tiene 31 dias
    alert("Su signo zodiacal es Geminis")
}
else if (mes === "junio" && dia >= 1 && dia <= 20 ){
    alert("Su signo zodiacal es Geminis")
}
//Cancer       21/Junio al 22/Julio
else if (mes === "junio" && dia >= 21 && dia <= 30 ){ //junio tiene 30 dias
    alert("Su signo zodiacal es Cancer")
}
else if (mes === "julio" && dia >= 1 && dia <= 22 ){
    alert("Su signo zodiacal es Cancer")
}
//Leo          23/Julio al 22/Agosto
else if (mes === "julio" && dia >= 23 && dia <= 31 ){ //julio tiene 31 dias
    alert("Su signo zodiacal es Leo")
}
else if (mes === "agosto" && dia >= 1 && dia <= 22 ){
    alert("Su signo zodiacal es Leo")
}
//Virgo        23/Agosto al 22/Septiembre
else if (mes === "agosto" && dia >= 23 && dia <= 31 ){ //agosto tiene 31 dias
    alert("Su signo zodiacal es Virgo")
}
else if (mes === "septiembre" && dia >= 1 && dia <= 22 ){
    alert("Su signo zodiacal es Virgo")
}
//Libra        23/Septiembre al 22/octubre
else if (mes === "septiembre" && dia >= 23 && dia <= 30 ){ //septiembre tiene 30 dias
    alert("Su signo zodiacal es Libra")
}
else if (mes === "octubre" && dia >= 1 && dia <= 22 ){
    alert("Su signo zodiacal es Libra")
}
//Escorpio     23/octubre al 21/noviembre
else if (mes === "octubre" && dia >= 23 && dia <= 31 ){ //octubre tiene 31 dias
    alert("Su signo zodiacal es Escorpio")
}
else if (mes === "noviembre" && dia >= 1 && dia <= 21 ){
    alert("Su signo zodiacal es Escorpio")
}
//Sagitario    22/noviembre al 21/diciembre
else if (mes === "noviembre" && dia >= 22 && dia <= 31 ){ //noviembre tiene 31 dias
    alert("Su signo zodiacal es Sagitario")
}
else if (mes === "diciembre" && dia >= 1 && dia <= 21 ){
    alert("Su signo zodiacal es Sagitario")
}
else  {
    alert("Probablemente ingresaste mal un mes, corrobóralo")
}






/* switch (mes && dia) {
    case mes == "enero" && dia >= 1 || dia <=31:
        alert("Su signo zodiacal es Capricornio")31
        break;

    default:
        alert("que desgracia")
        break;
} */