var x = 4, y = '4'
//Valor de compracion
x == y
true
//leva las dos variables comparadas a un mismo tipo de dato y como resultado arroja que ambos son iguales

x === y
false
//Que sea estrictamente igual el resultado, como buenas practicas es recomendable utilizar el triple igual.

var jose = {
    nombre : "Jose"
}
//var otraPersona = {...jose}//Así se crea un nuevo objeto dentro de un avariable
var otraPersona = {
    nombre: "Jose"
}
jose == otraPersona
false//Da falso ya que son objetos distintos, por mas que su contenido sea el mismo apuntan a una dirección en memoria diferente por lo tanto arroja falso, para que de true o sea verdad deben apuntar a la misma dirección en memoria