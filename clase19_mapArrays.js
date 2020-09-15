var sacha = {
    nombre:'Sacha',
    apellido:'More',
    altura: 1.71
}
var carlos = {
    nombre:'Carlos',
    apellido:'Sosa',
    altura: 1.73
}
var josep = {
    nombre:'Josep',
    apellido:'Corck',
    altura: 1.74
}
var maria = {
    nombre:'Maria',
    apellido:'Marialba',
    altura: 1.75
}
var dario = {
    nombre:'Dario',
    apellido:'Atigas',
    altura: 1.76
}
var jose = {
    nombre:'Jose',
    apellido:'Morales',
    altura: 1.77
}
var personas = [jose,dario,maria,josep,carlos,sacha]

const esAlta = ({altura}) => altura > 1.74
const esBaja = ({altura}) => altura < 1.74

//La funcion map devuelve un nuevo array donde modifica ciertos valores que le digamos.

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

const pasarAlturaACms = (persona) => {
    return {
        ...persona,
        altura: persona.altura * 100
    }//Creando un nuevo objeto cambiando un elemento en específico del mismo
}

var personasCms = personas.map(pasarAlturaACms)
//La funcion map devuelve un nuevo array donde modifica ciertos valores que le digamos.

//console.log(personasAltas)
//console.log(personasBajas)
console.log(personasCms)