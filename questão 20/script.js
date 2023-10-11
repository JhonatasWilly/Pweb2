const peso = parseFloat(prompt('Digite o seu peso (em quilogramas):'))
const altura = parseFloat(prompt('Digite a sua altura (em metros):'))

const imc = peso / (altura * altura)

document.write(`Seu IMC é: ${imc.toFixed(2)}`)
