var database;
var allPlayers;

var gameState = 0;
var playerCount;
var c1,c2,c3,c4,cars;
var c1Img, c2Img,c3Img,c4Img,gImg,tImg;
var form, player, game;

function preload(){
    c1Img = loadImage("images/car1.png");
    c2Img = loadImage("images/car2.png");
    c3Img = loadImage("images/car3.png");
    c4Img = loadImage("images/car4.png");
    tImg = loadImage("images/track.jpg");
}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database()

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
   // background("white");
   if(playerCount === 4){

    game.updateState(1);

   }
if(gameState === 1){
    clear();
    game.play();
} 
if(gameState === 2){
    game.end();
}
   
}
