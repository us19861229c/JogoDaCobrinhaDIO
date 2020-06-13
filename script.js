//elementos do palco, BG
let canvas = document.getElementById('snake')
let context = canvas.getContext('2d')
let box = 32

//criando a cobrinha - dando características a ela
let cobrinha=[]
cobrinha[0] = {
  x: 8 * box,
  y: 8 * box
}
let direction = "right"

//criando a comidinha - posicionando
let comidinha = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
}


//criando o BG
function criarBg() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box)
}

//criando a cobrinha - mecânica 
function criarCobrinha() {
  for (i=0 ; i < cobrinha.length; i++) {
    context.fillStyle = "green"
    context.fillRect(cobrinha[i].x, cobrinha[i].y, box, box)
  }
}
//criando a comidinha da cobrinha 
function desenharComidinha(){
  context.fillStyle = "red"
  context.fillRect(comidinha.x, comidinha.y, box, box )
}

//reconhecendo e associando as teclas do teclado ao movimento da cobrinha
document.addEventListener("keydown", atualizaMov)

function atualizaMov(event) {
  if (event.keyCode == 37 && direction != "right") direction = "left"
  if (event.keyCode == 39 && direction != "left") direction = "right"
  if (event.keyCode == 40 && direction != "up") direction = "down"
  if (event.keyCode == 38 && direction != "down") direction = "up"
}

//iniciar o jogo 
function iniciarJogo() {
  //faz a cobrinha "restartar" do lado oposto (não sumir do palco)
  if(cobrinha[0].x > 15 * box && direction == "right") cobrinha[0].x = 0
  if(cobrinha[0].x < 0 && direction == "left") cobrinha[0].x = 16 * box
  if(cobrinha[0].y > 15 * box && direction == "down") cobrinha[0].y = 0
  if(cobrinha[0].y < 0 && direction == "up") cobrinha[0].y = 16 * box

  //faz o jogo encerrar caso a cobrinha se choque com ela mesma
  for (i = 1; i < cobrinha.length; i++) {
    if(cobrinha[0].x == cobrinha[i].x && cobrinha[0].y == cobrinha[i].y){
      clearInterval(jogo)
      alert('Opa! Fim de jogo! :( Reinicie a página para jogar novamente')
    }
  }

  criarBg()
  criarCobrinha()
  desenharComidinha()

  let cobrinhaX = cobrinha[0].x
  let cobrinhaY = cobrinha[0].y

  // cria o movimento da cobrinha 
  if(direction == "right") cobrinhaX += box
  if(direction == "left") cobrinhaX -= box
  if(direction == "down") cobrinhaY += box
  if(direction == "up") cobrinhaY -= box

  //cria interação entre a cobrinha e a comidinha
  if (cobrinhaX != comidinha.x || cobrinhaY != comidinha.y){
    //remove o último item do array
    cobrinha.pop()
  } else {
    comidinha.x = Math.floor(Math.random() * 15 + 1) * box,
    comidinha.y = Math.floor(Math.random() * 15 + 1) * box
  }

  //acrescenta novo item à primeira posição do array
  let novaCabeca = {
    x: cobrinhaX,
    y: cobrinhaY
  }

  cobrinha.unshift(novaCabeca)

}

let jogo = setInterval(iniciarJogo, 100)