//Funciones como parametros
class persona {
    constructor(nombre, apellido,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        var { nombre,apellido } = this
        console.log(`Hola mi nombre es ${nombre} ${tapellido}`)
        if (fn){//una funcion que existe es un valor verdadero
            fn(nombre,apellido)
        }
    }
    soyAlto() {
        this.altura >=1.8 ? console.log(`Soy alto, mido ${this.altura}`) : consolelog(`No soy alto, mido ${this.altura}`)
    }
}

class desarrollador extends persona {
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
    }
    saludar(fn){
        var { nombre,apellido } = this //Desestructurar objetos
        // var nombre = this.nombre
        // var apellido = this.apellido

        console.log(`Hola, mi nombre es ${nombre} ${apellido} y soy un desarrollador/a`)
        if (fn){//una funcion que existe es un valor verdadero
            fn(nombre,apellido, true)
        }
    }
    
    
    
}


function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log('No sabias que eras desarrollador/a')
    } 
}


var jose = new persona('Jose','Morales',1.80)
var erika = new persona('Erika','Luna',1.90)
var arturo = new desarrollador('Arturo','Melendez',1.60)

arturo.saludar(responderSaludo)
//Al llamar un faqncion tambien en sus parametros de llamada se puede llamar una funcion, para obtener un resultado diferente