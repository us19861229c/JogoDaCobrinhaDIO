//elementos do palco, BG
let canvas = document.getElementById('snake')
let context = canvas.getContext('2d')
let box = 32

//criando a cobrinha - dando um tamanho inicial a ela
let cobrinha=[]
cobrinha[0] = {
  x: 8 * box,
  y: 8 * box
}


//criando o BG
function criarBg() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box)
}

//criando a cobrinha - mecânica 
function criarCobrinha() {
  for (i=0 ; i < cobrinha.length; i++) {
    context.fillStyle = 'green'
    context.fillRect(cobrinha[i].x, cobrinha[i].y, box, box)
  }
}

criarBg()
criarCobrinha()