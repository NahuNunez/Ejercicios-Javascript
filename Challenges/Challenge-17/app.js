const row = document.createElement("div");
row.className = "d-flex justify-content-center";

const col = document.createElement("div");
col.className = "col-3 card text-center p-5 mt-5 mb-5 shadow-sm"; /* bg-dark  */

const h2 = document.createElement("h2");
h2.setAttribute("id", "reloj");
h2.className = "display-4 text-primary";

// 2- agrego un elemento dentro del otro
const container = document.querySelector(".container");
container.appendChild(row);
row.appendChild(col);
col.appendChild(h2);


/* const ActualizarHora = () => {
    const hora = new Date()

    const HoraReloj = hora.getHours();
    const MinutosReloj = hora.getMinutes();
    const SegundosReloj = hora.getSeconds();

    return document.writeln(`${HoraReloj}:${MinutosReloj}:${SegundosReloj}`)
    //HoraReloj < 10 ? "0" + HoraReloj : HoraReloj
    //MinutosReloj < 10 ? "0" + MinutosReloj : MinutosReloj
    //SegundosReloj < 10 ? "0" + SegundosReloj : SegundosReloj
    
} 

setInterval(ActualizarHora(), 1000); */ //quitar parentesis despues


const actualizarReloj = () => {
  const actual = new Date(); // Creo un objeto Date que representa el momento actual--- "actual" contiene toda la info: hora, minutos, segundos, día, mes, año
  
  const horas = actual.toLocaleTimeString();
  //const minutos = actual.getMinutes();
  //const segundos = actual.getSeconds();

  /* - se extrae la hora con getHours (devuelve un número entre 0 y 23); 
     - se convierte en un string para que se pueda aplicar .padStart
     - .padStart: Asegura que el número tenga dos dígitos (2 , '0') el primer parametro es el largo total de la cadena y el segundo es el relleno para que no rompa el formato de dos dígitos 
   */

  const reloj = document.getElementById("reloj");
  reloj.textContent = `${horas}`;
};

setInterval(actualizarReloj, 1000); // cada segundo, se ejecuta actualizarReloj() y actualiza la hora en pantalla



/////////////////////// Lista de Tareas //////////////////////

/* obtengo por id el button */
const botonTarea = document.getElementById("button-addon2") 

/* obtengo por id el div para las tareas */
const listaTareas = document.getElementById("listaTareas");

let tareas = JSON.parse(localStorage.getItem("tareas")) || []

//Función para mostrar tareas en pantalla
const mostrarTareas = () => {
  listaTareas.textContent = ""; // limpiar la lista antes de pintarla

  tareas.forEach((texto, numTarea) => {
    const listGroupItem = document.createElement("div");
    listGroupItem.className = "list-group-item d-flex justify-content-between align-items-center";

    const tareaContent = document.createElement("span");
    tareaContent.className = "flex-grow-1";
    tareaContent.textContent = texto;

    //Checkbox de tarea realizada
    const checkGroup = document.createElement("div")
    checkGroup.className = "d-flex mx-3"

    const botonCheck = document.createElement("input")
    botonCheck.className = "form-check-input mx-3"
    botonCheck.type = "checkbox"
    
    const textoCheck = document.createElement("span")
    textoCheck.textContent = "Tarea realizada"

    checkGroup.appendChild(botonCheck)
    checkGroup.appendChild(textoCheck)
    

    // botón para eliminar tarea
    const botonBorrar = document.createElement("button");
    botonBorrar.className = "btn btn-danger btn-sm m-1";
    botonBorrar.textContent = "Eliminar";
    botonBorrar.addEventListener("click", () => eliminarTarea(numTarea));

    // Boton para editar una tarea
    const botonEditar = document.createElement("button");
    botonEditar.className = "btn btn-warning btn-sm m-1";
    botonEditar.textContent = "Editar";
    botonEditar.addEventListener("click", () => editarTarea(numTarea));

    
    listGroupItem.appendChild(tareaContent);
    listGroupItem.appendChild(checkGroup)
    listGroupItem.appendChild(botonBorrar);
    listGroupItem.appendChild(botonEditar);


    listaTareas.appendChild(listGroupItem);
  });
};

/* creo la funcion creaTarea que hara toda la logica */
const crearTarea = () => {

    /* guardo en la variable inputTarea lo que llamo por id al input de la tarea */
    const inputTarea = document.getElementById("inputTarea")

    /* guardo en la variable texto lo que se escribio en el input */
    const texto = inputTarea.value 

    //creo el contendedor de la tarea
      const listGroupItem = document.createElement("div");
      listGroupItem.className = "list-group-item d-flex justify-content-between align-items-center";
      
    //creo el contenido de la tarea
      const tareaContent = document.createElement("span");
      tareaContent.className = "flex-grow-1";

      /* con textContent se guarda lo que se escribio en el input */
      tareaContent.textContent = texto;

      listGroupItem.appendChild(tareaContent);
      listaTareas.appendChild(listGroupItem);
      
      tareas.push(texto)

      localStorage.setItem("tareas" , JSON.stringify(tareas))

      inputTarea.value = "";

      mostrarTareas()

}

// eliminar tarea por índice
const eliminarTarea = (numTarea) => {

  tareas.splice(numTarea, 1); // borrar del array

  localStorage.setItem("tareas", JSON.stringify(tareas)); // actualizar storage

  mostrarTareas(); // volver a imprimir

};

const editarTarea = (numTarea) => {

  const nuevoTexto = prompt("Editar tarea:", tareas[numTarea]);

  // Si el usuario canceló o dejó vacío, no cambiamos nada
  if (nuevoTexto === null || nuevoTexto.trim() === "") return;

  tareas[numTarea].texto = nuevoTexto.trim(); // actualizar texto

  localStorage.setItem("tareas", JSON.stringify(tareas)); // guardar

  mostrarTareas(); // volver a pintar

}

mostrarTareas()

botonTarea.addEventListener("click", crearTarea);



////////////////////////////////////////////////////////////


