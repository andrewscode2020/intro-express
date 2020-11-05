const express = require('express')
const app = express()

app.get('/clientes', (solicitud, respuesta) => {
    respuesta.send(['arreglo_clientes'])
})

app.get('/libros', (solicitud, respuesta) => {
    respuesta.send(['arreglo_libros'])
})

app.get('/precios', (solicitud, respuesta) => {
    respuesta.send(['arreglo_precios'])
})


// app.post('/', (solicitud, respuesta) => {
//     respuesta.send({error: 'No soportamos que preguntes usando el método POST'})
// })

// app.delete('/', (solicitud, respuesta) => {
//     respuesta.send({error: 'No podrás eliminar nada'})
// })

// Encender el servidor 
// app.listen(número de puerto, funcion para saber si el servidor ya está encendido):
app.listen(3000, () => {
    console.log('El servidor ya está encendido http://localhost:3000')
})