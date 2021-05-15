var database;
var allPlayers;

var gameState = 0;
var playerCount;
var c1,c2,c3,c4,cars;
var form, player, game;


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
   
}
