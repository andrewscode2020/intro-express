const funcion1 = (nombre) => {
    console.log('Hola ' + nombre)
}

const funcion2 = (nombre) => {
    console.log('Hasta luego ' + nombre)
}

// export default saludar
module.exports = {saludar: funcion1, despedirse:funcion2}