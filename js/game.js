class Game{
    constructor(){
        
    }


    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState = data.val();
        
        })
    }

    updateState(state){
        database.ref('/').update({
            gameState: state
        })
   
    }

    async start(){
        if(gameState === 0){
            player = new Player()
            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display()
        }
        c1= createSprite(200,200);
        c1.addImage(c1Img);
        c2= createSprite(500,200);
        c2.addImage(c2Img)
        /*c3= createSprite(700,200);
        c3.addImage(c3Img)
        c4= createSprite(900,200);
        c4.addImage(c4Img)*/
        cars= [c1,c2,c3,c4];
    }

    play(){

form.hide();
textSize(30)
text("Game Start",120,100)

Player.getPlayerInfo()
player.getFinishedPlayers();
if(allPlayers !==undefined){

    background(rgb(198,135,103));

image(tImg, 0,-displayHeight*4,displayWidth, displayHeight*5);
//var display_position = 130;
var index= 0;
var x=150;
var y;
for(var plr in allPlayers){
index= index+1;
x += 200;
y= displayHeight - allPlayers[plr].distance;
console.log(plr);
console.log(index) ;
cars[index-1].x= x;
cars[index-1].y= y;


if(index === player.index)
{
fill("red");
ellipse(x,y,60,60);
cars[index-1].shapeColor="red";
camera.position.x = displayWidth/2;
camera.position.y = cars[index-1].y;
}

textAlign(CENTER)
textSize(20)
text(allPlayers[plr].name, cars[index-1].x,cars[index-1].y+75);
}
}
//display_position +=20
//textSize(15)
//text(allPlayers[plr].name + ": " +  allPlayers[plr].distance, 120, display_position)



if(keyIsDown(UP_ARROW) && player.index !==null && passedFinish !== true){
player.distance +=10
player.update();

    }
   

if (player.distance >= 3680 && passedFinish == false){
   Player.updateFinishedPlayers()
   player.rank = finishedPlayers
   player.update()
    passedFinish = true
    
}
drawSprites();
}

displayRanks(){
camera.position.x = 0
camera.position.y = 0

imageMode(CENTER);
Player.getPlayerInfo();
    /*image(bronzeImg, displayWidth/-4, -100 + displayHeight/9, 200, 240);
    image(silverImg, displayWidth/4, -100 + displayHeight/10, 225, 270);*/
    image(goldImg, 0, -100, 250, 300);

    textAlign(CENTER);
    textSize(50);
    for(var plr in allPlayers){
        if(allPlayers[plr].rank === 1){
          text("1st :  "+allPlayers[plr].name,0,85);
        }
        /*else if(allPlayers[plr].rank === 2){
          text("2nd: " + allPlayers[plr].name, displayWidth/4, displayHeight/9 + 73);
        }else if(allPlayers[plr].rank === 3){
          text("3rd: " + allPlayers[plr].name, displayWidth/-4, displayHeight/10 + 76);
      }*/else{
          textSize(30);
          text("Honorable Mention: " + allPlayers[plr].name, 0, 225);
      }
      }


}
}
   
