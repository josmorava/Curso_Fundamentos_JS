var jose = {
    nombre: "Jose",
    apellido:'Morales',
    edad: 20,
    peso: 75
}
console.log(`Al inicio del año ${jose.nombre} pesa ${jose.peso} kilos`)

/*function aumentarDePeso(persona){
    return persona.peso += 200
}*/
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANNIO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO

//Hero code
for(i=1; i<= DIAS_DEL_ANNIO ;i++){
    var random = Math.random()
    if(random<0.25){
        //aumenta de peso
        aumentarDePeso(jose)
    }else if (random<0.5){
        //adelgazar
        adelgazar(jose)
    }
}

console.log(`Al final del año ${jose.nombre} pesa ${jose.peso.toFixed(1)} kilos`)//toFixed para que tome dos lugares de decimales luego de la coma al mostrar el numero
