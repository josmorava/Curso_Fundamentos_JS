var jose = {
    nombre : "Jose",
    apellido: "Morales",
    edad : 20
}
var dario = {
    nombre : "Dario",
    apellido : "Varon",
    edad: 21
}
var felipe = {
    nombre: "Felipe",
    apellido: "Montenegro",
    edad: 25
}


function imprimirNombreEnMayusculas (persona){
    //var nombre = persona.nombre
    var {nombre} = persona //Es lo mismo que acceder a el atributo de : persona.nombre, dentro de las llaves accede directamente a el atributo llamado "nombre" que se guardara en una variable llamada 'persona'. 
    console.log(nombre.toUpperCase())
}

//Reto imprimir variable con nombre y edad.
function imprimirNombreYEdad(n){
    var {nombre,apellido} = n, {edad} = n
    console.log(`Hola, mi nombre es ${nombre +" "+apellido} y tengo ${edad} años`)
}
imprimirNombreYEdad(jose)


