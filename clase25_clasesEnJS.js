class persona {//clase que va a ejecutar un metodo, llamado constructor.
    constructor(nombre, apellido,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
    }
    soyAlto() {// const nombre = condicion ? if : else;
        /*condicion*/this.altura >=1.8 ?/*si*/ console.log(`Soy alto, mido ${this.altura}`) :/*si no*/consolelog(`No soy alto, mido ${this.altura}`)
    }
}

//Hacer que una clase herede de otra
class desarrollador extends persona {
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
        //Antes de poder acceder a utlizar el metodo 'this' hay que llamar a la funcion 'super'
        
        // this.nombre = nombre
        // this.apellido = apellido
        // this.añtura= altura
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y soy un desarrollador/a`)
    }
}



var jose = new persona('Jose','Morales',1.80)
// var erika = new persona('Erika','Luna',1.90)
var arturo = new desarrollador('Arturo','Melendez',1.60)

