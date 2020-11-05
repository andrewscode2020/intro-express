const express = require('express')
const app = express()

app.get('/', (solicitud, respuesta) => {
    respuesta.send('<h1>Hola</h1>')
})

// Encender el servidor 
// app.listen(número de puerto, funcion para saber si el servidor ya está encendido):
app.listen(3000, () => {
    console.log('El servidor ya está encendido http://localhost:3000')
})