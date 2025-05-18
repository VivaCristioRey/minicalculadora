let numeros = [4, 10, 2, 1, 9, 7, 6, 3, 5, 8, 6, 11, 15, 14, 12, 13]

function ordernarNumeros() {
    console.log(numeros)
    numeros.sort((a, b) => a - b)
    console.log(numeros)
}

function buscarNumero() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      readline.question('¿Qué número va a buscar?: ', (input) => {
        const numero = parseInt(input)
        const findNumber = numeros.find(i => i === numero)
        const indice = numeros.findIndex(i => i === findNumber)
        console.log(`El número es: ${findNumber} y su índice es: ${indice}`)
      });
}
ordernarNumeros()
buscarNumero()