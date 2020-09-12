var maria = {nombre: 'Maria',edad: 15}
var juan = {nombre:'Juan',edad:18}

const MAYORIA_DE_EDAD = 18//Definiendo una constante que por buenas practicas se escribe en mayusculas y separada por guiones bajos

function imprimirSiEsMayorDeEdad (persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}
function esMayorDeEdad (persona){
    return persona.edad >= MAYORIA_DE_EDAD
}
