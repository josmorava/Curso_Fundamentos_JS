var jose = {
    nombre : "Jose",
    apellido: "Morales",
    edad : 20
}
var dario = {
    nombre : "Dario",
    apellido : "Varon",
    edad: 21
}
function cumpleaños(persona){
    //persona.edad += 1
    return{
        ...persona,
        edad:persona.edad+1
    }//Esta funcion devuelve un nuevo objeto que aumenta la edad en 1
}
//Aumentó la edad en uno
