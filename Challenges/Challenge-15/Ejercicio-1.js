
const productos =  [ 
{ id: 1, nombre: "Laptop", precio: 1200, categoria: "tecnologia", stock: 15 },
{ id: 2, nombre: "Mouse", precio: 25, categoria: "tecnologia", stock: 0 },
{ id: 3, nombre: "Silla", precio: 150, categoria: "muebles", stock: 8 },
{ id: 4, nombre: "Monitor", precio: 300, categoria: "tecnologia", stock: 12 },
{ id: 5, nombre: "Teclado", precio: 45, categoria: "tecnologia", stock: 0 } ]


//Ejercicio 1
//Mostrar todos los productos que tienen stock disponible

const stockDisponible = productos.filter(function (producto) {
    return producto.stock > 0
})

console.log(stockDisponible)



//Ejercicio 2
//2Crear un array solo con los nombres y precios de los productos

const arrayNuevo = productos.map(function (producto) {
    return {nombre: producto.nombre , precio: producto.precio}
})

console.log(arrayNuevo);



//Ejercicio 3
//Filtrar los productos de tecnología que tienen stock

const stocktech = productos.filter((producto) => producto.categoria === "tecnologia" && producto.stock > 0)

    //if (producto.categoria === "tecnologia" && producto.stock > 0) {
        //return producto
    //}

console.log(stocktech);



//Ejercicio 4
//Encontrar el producto llamado "Monitor"

const EncontrarMonitor = productos.find((producto) => producto.nombre === "Monitor")

//if (producto.nombre === "Monitor"){
    //  return producto
//}

console.log(EncontrarMonitor);
