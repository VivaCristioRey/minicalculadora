// import {sumar, resta} from ('./OperacionesEnteros/enteros')


const express = require('express')
const app = express()
const port = 8888

app.get('/quieroSumar', (req, res) => {
    res.send('<h1>Hola, ¿Qué quieres sumar?</h1>')
})

app.get()

app.get('', (req, res) => {
    res.send('<h1>Hola, ¡Bienvenido!</h1>')
})

app.listen(port, () => {
    console.log('App en línea')
})