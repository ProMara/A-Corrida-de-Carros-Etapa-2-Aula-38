var canvas;
var backgroundImage, bgImg, car1_img, car2_img, estrada;
var database, gameState;
var form, player, playerCount=0;
var allPlayers, carro1, carro2;
var carros = [];

function preload() {
 backgroundImage = loadImage("planodefundo.png");
  carroimg1 = loadImage("car1.png");
  carroimg2 = loadImage("car2.png");
  estrada = loadImage("pista.png");


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.lerEstado();
  game.start();
}

function draw() {
  background(backgroundImage);

  //se houver 2 players, mudar o gameState para 1
  if(playerCount == 2){
    game.atualizarEstado(1)
  }
  //se o gameState for 1, então começar o jogo
  if(gameState == 1){
    game.play()
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
