let frutas = ['banana', 'maçã', 'uva']

for (i = 0; i < frutas.length; i++) {
  document.write(frutas[i] + '<br>')
}

frutas.forEach(function (i) {
  document.write(i + '<br>')
})
