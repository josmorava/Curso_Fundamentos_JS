function persona(nombre, apellido,altura){
    //console.log('Me ejecutaron')
    //this hace referencia a la funcion padre (prototipo) que a su ves se asigna a una variable
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
persona.prototype.saludar = function(){
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)//Agregar una funcion al prototipo de la funcion persona que va a saludar a las variables nuevas que se vayan agregando
}

persona.prototype.soyAlto =function(){
    if(this.altura >=1.8){
        console.log(`Soy alto, mido ${this.altura}`)
    }else{
            console.log(`No soy alto, mido ${this.altura}`)
    }
    
}

//La palabra new crea nuevos objetos dado un prototipo, crea un nuevo objeto y asigna un prototipo.
var jose = new persona('Jose','Morales',1.80)
var erika = new persona('Erika','Luna',1.90)
var arturo = new persona('Arturo','Melendez',1.60)

