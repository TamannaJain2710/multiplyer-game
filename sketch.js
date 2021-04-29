var ball;
var pos
var ballPos;
var database;

function setup(){

    database = firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ballPos = database.ref('ball/position')
    ballPos.on("value",readPos,error);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPos(data){
    pos = data.val();
    console.log(pos)
    ball.x = pos.x;
    ball.y = pos.y;
}

function error(){
    console.log("error");
}


function writePosition(x,y){
    database.ref('ball/position').set({
        x : pos.x + x,
        y: pos.y + y
    })
   
}
