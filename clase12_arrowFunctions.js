var maria = {nombre: 'Maria',edad: 15}
var juan = {nombre:'Juan',edad:18}

const MAYORIA_DE_EDAD = 18

//Ejemplo de primera forma
/*const esMayorDeEdad = function (persona){
    return persona.edad >=MAYORIA_DE_EDAD
} */ //Agregar a una variable el valor de una funcion, la vuelve una funcion anonima, ya que no tiene nombre


                    // '=>' es igual que colocar la palabtra function
                    //Los parametros no hace falta colocarlos tampoco dentro de (parentesis)
                    //Si la funcion solo retonrna una salida se pueden quitar las llaves que la envuelven así como la palabra return
const esMayorDeEdad =  ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad (persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}

function permitirAcceso (persona){
    if(!esMayorDeEdad(persona)){
        console.log("Acceso denegado")
    }else{
        console.log("Acceso permitido")
    }
}
//Reto funcion arrow function esMenorDeEdad que retone la negacion a la llamada es mayor de edad


const esMenorDeEdad = (edad) => !esMayorDeEdad(edad)