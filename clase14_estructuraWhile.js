var jose = {
    nombre: "Jose",
    apellido:'Morales',
    edad: 20,
    peso: 75
}
console.log(`Al inicio del año ${jose.nombre} pesa ${jose.
peso} kilos`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANNIO = 365

const aumentarDePeso = (persona) => persona.peso += 
INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = jose.peso - 3
var dias = 0

//El codigo while repite el codigo mientras que la condicion dentro de parentesis se cumpla, sea verdadera o falsa
while (jose.peso > META){
    if(comeMucho()){
        aumentarDePeso(jose)
    }
    if(realizaDeporte()){
        adelgazar(jose)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${jose.nombre} aldelgazó 3 kilos`)


