const btn = document.querySelector('#send')
const resultado = document.querySelector('#resultado')

btn.addEventListener('click', function (e) {
  e.preventDefault()

  let n1 = document.querySelector('#n2')
  let n2 = document.querySelector('#n1')

  function soma(num1, num2) {
    let soma = parseInt(num1) + parseInt(num2)
    resultado.innerText = `A soma dos numeros são: ${soma}`
  }

  soma(n1.value, n2.value)
})
