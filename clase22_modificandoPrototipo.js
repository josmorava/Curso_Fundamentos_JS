function persona(nombre, apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
persona.prototype.saludar = function(){
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
}
// const nombre = condicion ? if : else;

persona.prototype.soyAlto =function(){
    /*condicion*/this.altura >=1.8 ?/*si*/ console.log(`Soy alto, mido ${this.altura}`) :/*si no*/ console.log(`No soy alto, mido ${this.altura}`)
}

var jose = new persona('Jose','Morales',1.80)
var erika = new persona('Erika','Luna',1.90)
var arturo = new persona('Arturo','Melendez',1.60)

