var canvas,bgImage;

var database;
var gameState = 0
var playerCount;
var form,player,game;
var allPlayers;


var  gamers,hitler,allies,bomb,explosion;
var hitlerImage,alliedImage,bombImage,exploImage;

var hitlerScore = 0
var alliesScore = 0

function preload(){
    bombImage = loadImage("images/download.jpeg")
    hitlerImage = loadImage("images/png-transparent-adolf-hitler-nazi-germany-second-world-war-downfall-adolf-hitler-face-monochrome-head.png")
    alliedImage = loadImage("images/second-world-war-decal-military-logo-sticker-png-favpng-JVUkB3gmTgk9P7PD6e9f8iGuP.jpg")
    exploImage = loadImage("images/images.jpeg")
    bgImage = loadImage("images/download (2).jpeg")
}


function setup(){
    canvas = createCanvas(displayWidth, displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
   if(playerCount === 2){
      game.update(1)

   }
   if(gameState === 1){
       clear()
       game.play()
      
   }

    
  
}