var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1_img, car2_img, car3_img, car4_img;
var track,car1IMG,car2IMG,car3IMG,car4IMG;


function preload(){
track=loadImage("images/track.png");
car1=loadImage("images/car1.png");
car2=loadImage("images/car2.png");
car3=loadImage("images/car3.png");
car4=loadImage("images/car4.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
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
}
