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
        c3= createSprite(700,200);
        c3.addImage(c3Img)
        c4= createSprite(900,200);
        c4.addImage(c4Img)
        cars= [c1,c2,c3,c4];
    }

    play(){

form.hide();
textSize(30)
text("Game Start",120,100)

Player.getPlayerInfo()
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
cars[index-1].shapeColor="red";
camera.position.x = displayWidth/2;
camera.position.y = cars[index-1].y;
}
}
//display_position +=20
//textSize(15)
//text(allPlayers[plr].name + ": " +  allPlayers[plr].distance, 120, display_position)

}

if(keyIsDown(UP_ARROW) && player.index !==null){
player.distance +=50
player.update()
    }
    console.log(player.distance)
drawSprites();
if (player.distance >= 3860){
    gameState = 2;
}
}
    end(){
    console.log("game ended");
    
}
}