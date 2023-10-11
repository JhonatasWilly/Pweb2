const array = []

for (i = 0; i < 3; i++) {
  array[i] = parseInt(prompt('Digite um numero: '))
}

function maiorNumero(array) {
  let maior = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i]
    }
  }

  return maior
}

const maiorNumeroArray = maiorNumero(array)
document.write(`O maior número digitado foi: ${maiorNumeroArray}`)
