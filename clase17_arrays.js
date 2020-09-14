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
//Acceder a un elemento dentro de un objeto en el array = personas[0].altura ó personas[0]['altura']

for (var i= 0; i<personas.length;i ++){
    var persona = personas[i]
    console.log(`${personas.nombre} mide ${persona.altura} metros`)
}