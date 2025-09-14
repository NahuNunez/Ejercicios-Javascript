//Calcular la suma de los primeros 50 números naturales.

//primero declaré la variable suma en 0
let suma = 0


//bucle for para que vaya agregando numeros del 1 al 50
for (num = 0; num <= 50; num++){

    //la variable suma guarda la operacion de adesion al num anterior 
    
    suma = num + suma
    //suma += num (el caracterer (+=) opera igual como el ejemplo de arriba)

    console.log(suma);
}

