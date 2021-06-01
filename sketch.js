var database;
var allPlayers;

var gameState = 0;
var playerCount;
var c1,c2,c3,c4,cars;
var c1Img, c2Img,c3Img,c4Img,gImg,tImg;
var bronzeImg, silverImg, goldImg;
var form, player, game;
var finishedPlayers = 0;
var passedFinish = false;


function preload(){
    c1Img = loadImage("images/car1.png");
    c2Img = loadImage("images/car2.png");
    c3Img = loadImage("images/car3.png");
    c4Img = loadImage("images/car4.png");
    tImg = loadImage("images/track.jpg");
    bronzeImg = loadImage("images/3.png");
    silverImg = loadImage("images/2.png");
    goldImg = loadImage("images/1.png")

}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database()

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background(200, 200, 255);
   if(playerCount === 4){

    game.updateState(1);

   }
if(gameState === 1){
    clear();
    game.play();
} 
if(finishedPlayers === 4){
    game.updateState(2)
}
if(gameState === 2 && finishedPlayers === 4){
    game.displayRanks()
}
   
}
