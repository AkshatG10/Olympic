var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var tr1, tr2, tr3, tr4, tb;

var court, tr1_img, tr2_img, tr3_img, tr4_img, tb_imj;

function preload(){
  court = loadImage("../images/court.png");
  tr1_img = loadImage("../images/tr1.png");
  tr2_img = loadImage("../images/tr2.jpg");
  tr3_img = loadImage("../images/tr3.png");
  tr4_img = loadImage("../images/tr4.jpg");
  tb_imj = loadImage("../images/tb.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  background("back.jpg");
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
