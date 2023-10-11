let num = prompt('Insira um numero: ')

let cont = 0
let i = num
while (i > 0) {
  if (num % i === 0) {
    cont++
  }
  i--
}

cont > 2
  ? alert(`${num} não é um numero primo`)
  : alert(`${num} é um numero primo`)
