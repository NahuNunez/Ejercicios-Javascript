let contador = 0

const titulo = document.getElementById("numero-modificable")


const aumentador = () => {
    console.log("vamos bien");

    //console.log(titulo.innerText);

    contador++

    titulo.innerText = contador
}


const decrementador = () =>{
    console.log("bien");

    if (contador <= 0) {
        titulo.classList.add("disabled")
    }else{
        contador--
    }

    titulo.innerText = contador
    
}

const reseteador = () =>{
    console.log("bien bien bien bien");

    contador = 0

    titulo.innerText = contador
    
}