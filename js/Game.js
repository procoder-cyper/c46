class Game{
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
    
        hitler = createSprite(displayWidth - 20 , displayHeight/2)
        hitler.addImage(hitlerImage)
        hitler.scale = 0.25

        allies = createSprite(10,displayHeight/2)
        allies.addImage(alliedImage)
        allies.scale = 0.25

        gamers = [hitler,allies]

        bomb = createSprite(displayWidth/2,displayHeight/2)
        bomb.addImage(bombImage)
        bomb.scale = 0.25
      }
      play(){
        form.hide()

        Player.getPlayerInfo()

        if(allPlayers !== undefined){
          background(bgImage)

          var index = 0
           var y;
          for(var plr in allPlayers){
            index = index+1


            y = World.mouseY


           
          }
          if(gameState === 1 ){
            fill('black')
            text("Player Should Release The Bomb With Space" , bomb.x - 50 , bomb.y - 20)
          }
          text(hitlerScore , displayWidth/2 -30 , 20)
          text(alliesScore , displayWidth/2 + 30 , 20)
           if(player.index !== null){
          
          player.update()
           }

        }
        drawSprites()
      }
    }