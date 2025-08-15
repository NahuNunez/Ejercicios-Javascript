//dado un numero mostrar si es niño, adolescente, adulto o adulto mayor.

let edad = parseInt(prompt("Ingrese su edad"));

if (edad === 0){
    alert("Usted no Nació!!!")
}
else if(edad >=1 && edad <=5){
    alert("Usted es un pequeño niño")
}
else if(edad >=6 && edad <=11){
    alert("Usted es un niño grandecito")
}
else if(edad >=12 && edad <=18){
    alert("Usted es un Adolescente")
}
else if(edad >=19 && edad <=26){
    alert("Usted es Joven")
}
else if(edad >=27 && edad <=59){
    alert("Usted es Adulto")
}
else if(edad >=60 && edad <=99){
    alert("Usted es Viejito")
}
else if(edad >=100 && edad <=120){
    alert("FELICITACIONES POR VIVIR TANTO TIEMPO!!!")
}
else{
    alert("Edad no válida")
}