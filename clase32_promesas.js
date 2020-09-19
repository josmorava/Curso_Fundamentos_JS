//Promesas como forma de hacer que los callbacks sean más lejibles, son valores que aun no conocemos.
//Primer estado de klas prmoesas : pending
//Si la promesa se resuelve pasa al segundo estado: fulfilled, aqui se ultiza .then()
//Si ocurre algin error pasa al estado : rejected, aqui se utiliza .err()

//Ejemplo de promesa
/*new Promise (function(resolve,reject){

}).then(valor => {

}).catch(err =>{

}) */


const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true } 


function obtenerPersonaje(id) {
    return new Promise((resolve,reject)=>{
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $.get(url,opts,function(data){
        resolve(data)
    })
    .fail(()=> reject(id))
    })       
}


function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}
//Forma de llamar personsje mediante una promesa
obtenerPersonaje(1)
    .then(function(personaje){
        console.log(`El personaje 1 es ${personaje.name}`)
    })

    //Si sucede algun error:
    .catch(onError)






