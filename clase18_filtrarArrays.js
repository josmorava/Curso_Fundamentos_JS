//arrays
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

//Filtrar elementos de un array,la funcion filter lleva como parametro una condicion que va a arrojar los resultados segun sea la condición
const esAlta = ({altura}) => altura > 1.74
const esBaja = ({altura}) => altura < 1.74


var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)
