var jose = {
    //clave:valor
    //elemento:descripcion
    nombre : "Jose",
    apellido: "Morales",
    edad : 20
}
var dario = {
    nombre : "Dario",
    apellido : "Varon",
    edad: 21
}


function imprimirNombreEnMayusculas ({nombre}){//buscar el atributo nombre del objeto que se coloque
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre: "Josefa"}) //Manera de crear un nuevo objeto y mandarlo a llamar dentro de una representación de la función.