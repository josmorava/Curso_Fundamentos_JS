var sacha = {
    nombre:'Sacha',
    apellido:'More',
    altura: 1.71,
    cantidadDeLibros: 10
}
var carlos = {
    nombre:'Carlos',
    apellido:'Sosa',
    altura: 1.73,
    cantidadDeLibros: 20
}
var josep = {
    nombre:'Josep',
    apellido:'Corck',
    altura: 1.74,
    cantidadDeLibros: 30
}
var maria = {
    nombre:'Maria',
    apellido:'Marialba',
    altura: 1.75,
    cantidadDeLibros: 40
}
var dario = {
    nombre:'Dario',
    apellido:'Atigas',
    altura: 1.76,
    cantidadDeLibros: 50
}
var jose = {
    nombre:'Jose',
    apellido:'Morales',
    altura: 1.77,
    cantidadDeLibros: 60
}
var personas = [jose,dario,maria,josep,carlos,sacha]

const esAlta = ({altura}) => altura > 1.74
const esBaja = ({altura}) => altura < 1.74

// var personasAltas = personas.filter(esAlta)
// var personasBajas = personas.filter(esBaja)

const pasarAlturaACms = (persona) => {
    return {
        ...persona,
        altura: persona.altura * 100
    }
}

var personasCms = personas.map(pasarAlturaACms)

//console.log(personasAltas)
//console.log(personasBajas)
//console.log(personas)
// var acum = 0
// for (i=0; i<personas.length;i++){
    // acum = acum + personas[i].cantidadDeLibros
// }
// 
const reducer = (acum, {cantidadDeLibros}) =>  
acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer,0)
//Reduce lo que hace es reducir el array a un valor unico
console.log(`En total todos tienen ${totalDeLibros} libros`)