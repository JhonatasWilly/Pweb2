let array = []
let sum = 0

for (i = 0; i < 5; i++) {
  array[i] = prompt(`Qual a nota do ${i + 1} aluno`)
}

let b = array.map(Number)

for (i = 0; i < b.length; i++) {
  sum += b[i]
}
let media = sum / 5

document.write(`A media dos 5 alunos foram: ${media}`)
