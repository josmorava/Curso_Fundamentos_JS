//Estructuras de control, condicionales
var jose = {
    nombre:'Jose',
    apellido:'Morales',
    edad: 20,
    ingeniero: true,
    cocinero : false,
    deportista: true,
    dj: false,
    guitarrista: false
}
//Variables booleana
function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)
    if(persona.ingeniero === true){
        console.log('Ingeniero')
    }//Condicional if
    if(persona.cocinero){
        console.log('Cocinero')
    }
    if(persona.deportista){
        console.log('Deportista')
    }
    if(persona.dj){
        console.log('Dj')
    }
    if(persona.guitarrista){
        console.log('Guitarrista')
    }
}
imprimirProfesiones(jose)

//reto: imprimir si es mayor de edad: jose es mayor de edad o es menor de edad

var maria = {nombre: 'Maria',edad: 15}
var juan = {nombre:'Juan',edad:18}
function imprimirSiEsMayorDeEdad (persona){
    if (persona.edad >=18){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}

