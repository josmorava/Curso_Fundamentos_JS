var nombre = "Jose"
function imprimirNombreEnMayusculas (nombre){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}
//Toda variable que no este definida dentro de una funcion estara definda por defecto en el alcsnce global del codigo, lo que quiere decir que modificará la variable original. Como buenja practica se recomienda crear una variable dentro de los prametros para poder usarla dentro de la funcion, y así no modificar la variable que está en scope global, si no la que está en local
imprimirNombreEnMayusculas(nombre)

