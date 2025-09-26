

//Crear un array solo con nombres y carreras

//Filtrar estudiantes de Ingeniería mayores de 19 años

//Encontrar al estudiante con ID 3


const estudiantes = [ 
{ id: 1, nombre: "Ana", edad: 20, promedio: 8.5, carrera: "Ingeniería" },
{ id: 2, nombre: "Carlos", edad: 22, promedio: 7.2, carrera: "Medicina" },
{ id: 3, nombre: "Chancho", edad: 2 , promedio: 9.1, carrera: "Ingeniería" },
{ id: 4, nombre: "Luis", edad: 21, promedio: 6.8, carrera: "Derecho" },
{ id: 5, nombre: "Sofía", edad: 20, promedio: 8.9, carrera: "Ingeniería" } ]


//Ejercicio 1
//Mostrar estudiantes con promedio mayor a 8.0

const PromedioMayor = estudiantes.filter((valor) => valor.promedio > 8.0)

console.log(PromedioMayor);


