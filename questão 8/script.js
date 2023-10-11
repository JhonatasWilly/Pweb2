let numRandom = Math.floor(Math.random() * 10)
let numero

do {
  numero = parseInt(prompt('Digite um numero: '))
  numero === numRandom ? console.log('Acertou!') : console.log('Errou!')
} while (numero !== numRandom)
