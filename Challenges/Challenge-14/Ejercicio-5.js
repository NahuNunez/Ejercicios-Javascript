//Crea una función que reciba un texto y lo devuelva invertido usando un while y .substring() o .charAt().

let texto = "desgracia"

function InvertirTexto(a) {

    //creo la variable donde iran las letras al reves
    let TextoInvertido = "";

    //.length = 9 , son las letras que tiene, se le resta 1 para obtener la ultima letra, ya que se cuentan a partir de 0
    let i = a.length - 1; 

    //mientras i sea mayor o igual que 0 se repite la operacion
    while (i >= 0 ) {
        
        //aqui se guardan en la variable vacia las letras
        TextoInvertido = TextoInvertido + a.charAt(i);

        //se resta 1 a i para seguir con la letra siguiente
        i --;
    }
    return TextoInvertido
}

console.log(InvertirTexto(texto));
