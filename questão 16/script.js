const numAleatorio = Math.floor(Math.random() * 100) + 1
let tentativas = 0
let acertou = false

while (!acertou) {
  const chute = Number(prompt('Tente adivinhar o número (entre 1 e 100):'))
  tentativas++

  if (chute === numAleatorio) {
    acertou = true
    alert(
      `Você acertou o número ${numAleatorio} em ${tentativas} tentativa(s).`
    )
  } else if (chute < numAleatorio) {
    alert('Digite um número maior.')
  } else {
    alert('Digite um número menor.')
  }
}
