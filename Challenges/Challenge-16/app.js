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

const body = document.getElementById("elemento-body") 
console.log(body);

const divCard1 = document.getElementById("card1")
const divCard2 = document.getElementById("card2")
const divCard3 = document.getElementById("card3")




const cambiadorClaro = () => {
    console.log("Desde la funcion");
    
    body.classList.replace("fondo-oscuro", "fondo-claro");
    divCard1.classList.replace("fondo-oscuro", "fondo-claro");
    divCard2.classList.replace("fondo-oscuro", "fondo-claro");
    divCard3.classList.replace("fondo-oscuro", "fondo-claro");

}

const cambiadorOscuro = () => {
    console.log("Desde la funcion");
    
    body.classList.replace("fondo-claro", "fondo-oscuro");
    divCard1.classList.replace("fondo-claro", "fondo-oscuro");
    divCard2.classList.replace("fondo-claro", "fondo-oscuro");
    divCard3.classList.replace("fondo-claro", "fondo-oscuro");

}

const btnCambiarTema = document.querySelector(".btn-dark")
console.log(btnCambiarTema);

const cambiarTema = () => {
    const html = document.documentElement;

    const temaActual = html.getAttribute("data-bs-theme")
    console.log(temaActual);

    html.setAttribute("data-bs-theme", temaActual === "dark" ? "light" : "dark")
    
}


btnCambiarTema.addEventListener("click",cambiarTema)
