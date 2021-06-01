class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.resetButton = createButton('reset');
    }


    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2 - 50,0);


        this.input.position(displayWidth/2 - 40,displayHeight/2-80)
        this.button.position(displayWidth/2 + 30,displayHeight/2)
        this.resetButton.position(20,15);

        this.resetButton.mousePressed(()=>{
            player.updateCount(0);
            game.updateState(0);
            database.ref("/").update({
                players:null,
                finishedPlayers:0
            })
        })
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            playerCount += 1
            player.name = this.input.value();
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Hello " + player.name)
            this.greeting.position(displayWidth/2 -30,displayHeight/4)

        })

    }

    
}