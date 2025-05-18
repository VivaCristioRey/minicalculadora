// import {sumar, resta} from ('./OperacionesEnteros/enteros')
const exp = require('express')
const app = exp()
const port = 8888

app.get('/quieroSumar', (req, res) => {
    res.end('<h1>Hola, ¿Qué quieres sumar?</h1>')
})

app.get('/', (req, res) => {
    res.send('<h1>Hola, ¡Bienvenido!</h1>')
    res.end()
})

app.listen(port, () => {
    console.log('App en línea')
})