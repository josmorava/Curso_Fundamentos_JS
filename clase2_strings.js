
var nombreEnMayusculas = nombre.toUpperCase();//Todos lo elemenyos en mayusculas

var apellidoEnMinusculas = apellido.toLowerCase();//Todos lo elemnetos en minusculas

var  primeraLetraDelNombre = nombre.charAt(0);//saber cual es el elemento de un string en cierta posicion, dentro de js todo elemento empieza en la posicion "0"

var cantidadDeLetrasDelNombre = nombre.length//Muestra la longitud de el elemento

//var nombreCompleto = nombre + " " + apellido//Concatenar strings

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`//Dentro de las llaves se puede colocar legunaje js

var str = nombre.charAt(1) + nombre.charAt(2) //Acceder a cierto valores del string, detro de los parametros se coloca la posicion de la cual queremos saber el valor

var str1 = nombre.substr(0,2)// Accerder a ciertos valores dentro de un string, dentro de los parametros se le da el inicio de donde empieza a tomar valores y seguido de una como el final
