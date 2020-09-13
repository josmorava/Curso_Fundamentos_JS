var contador = 0
//Math.ramdon(), funcion que arroja un numero aleatorio entre 0-1

const llueve = () => Math.random() < 0.25
 
//Si la condicion no se cumple la parte del DO se cumple hasta que la condicion del WHILE sea verdad y se ejecute ese codigo.
do{
    contador += 1
}while (!llueve())

//Forma de hacer un ciclo if :
//Nombre del ciclo antes del  =
                //Condicion
                                //true
                                        //else
var frecuenc = contador===1 ? 'ves' : 'veces';

console.log (`Fui a ver si llovia ${contador} ${frecuenc}`)





