let palavra = prompt('Digite uma palavra para verificar se é um palindromo: ')

palavra.split('').reverse().join('') === palavra
  ? alert('É um palindromo')
  : alert('Não é um palindromo!')
