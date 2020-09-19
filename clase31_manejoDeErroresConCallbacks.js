const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true } 


function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    //Encadenar otra callback en dado caso que ocurra algun error con '.fail'
    $.get(url,opts,callback).fail(function (){
        console.log(`Sucedio un error no se pudo obtener al personaje ${id}`)
    })
        
}
//Cambiando la logica del programa y llamando al callback dentro del get

obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function (personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6, function (personaje) {
                        console.log(`Hola, yo soy ${personaje.name}`)

                        obtenerPersonaje(7, function (personaje) {
                            console.log(`Hola, yo soy ${personaje.name}`)

                            /*obtenerPersonaje(1000000000, function (personaje) {
                                console.log(`Hola, yo soy ${personaje.name}`)
                            })*/
                        })
                    })
                })
            })
        })
    })
})





