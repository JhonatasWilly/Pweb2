let array = []
let sum

for (i = 0; i < 5; i++) {
  array[i] = prompt(`Qual a nota do ${i + 1} aluno`)
}

for (i = 0; i < array.length; i++) {
  sum = sum + array[i]
}

document.write(`A media das notas dos 5 alunos foram ${sum}`)
