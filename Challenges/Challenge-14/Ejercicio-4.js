//Crea una función que reciba un texto y una letra, y cuente cuántas veces aparece usando un for.

let texto = "colaboracion"    //a

let letra = "o"  //prompt("Ingrese una letra")  //b
 
function CantidadLetras(a,b) {

    let contador = 0;

    for(let i = 0 ; i < a.length ; i++ ){

        if (a[i] === b) {
            
            contador++
        }
    }

    return contador;
}

console.log(CantidadLetras(texto, letra));
