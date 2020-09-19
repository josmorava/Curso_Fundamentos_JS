const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//Metodo para hacer un request
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true } //Indicando que va a acceder a un pagina externa

const onPeopleResponse = function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url,opts,onPeopleResponse)
}

//$.get(lukeUrl, opts, onPeopleResponse)//Callback, funcion que se va a ejecutar en un futuro cuando termine el request


obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

//Asincronismo, no saber en que orden llegaran las respuestas.

