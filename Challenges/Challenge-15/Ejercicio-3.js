
const tareas =[ 
{ id: 1, descripcion: "Hacer ejercicio", completada: true, prioridad: "alta" }, 
{ id: 2, descripcion: "Estudiar JavaScript", completada: false, prioridad: "alta" }, 
{ id: 3, descripcion: "Comprar víveres", completada: false, prioridad: "media" }, 
{ id: 4, descripcion: "Llamar al médico", completada: true, prioridad: "baja" }, 
{ id: 5, descripcion: "Limpiar la casa", completada: false, prioridad: "media" } ]


//Ejercicio 1
//Mostrar las tareas que están pendientes (no completadas)

const pendientes = tareas.filter((tarea) => tarea.completada === true)

console.log(pendientes);



//Ejercicio 2
//Crear un array solo con las descripciones de las tareas

const descripcion = tareas.map((tarea) => tarea.descripcion) 

console.log(descripcion);



//Ejercicio 3
//Filtrar las tareas de alta prioridad que no están completadas

const tareasNocomp = tareas.filter((tarea) => tarea.completada === false && tarea.prioridad === "alta")

console.log(tareasNocomp);



//Ejercicio 4
//Encontrar la tarea que contiene "JavaScript" en su descripción

const encontrarTarea = tareas.find(tarea => tarea.descripcion.includes("JavaScript"))  

console.log(encontrarTarea);

