
function StateMachine(State){
    let gameOver = 0;
    switch(State){
    case 0: 
        let playerValues = gameState.player_back.isStillTurn();
        State = 1;
        break;
    case 1:
        let bot1Values = gameState.enemy1_back.isStillTurn();
        State = 2;
        break;
    case 2:
        let bot2Values = gameState.enemy2_back.isStillTurn();
        State = 3;
        break;
    case 3:
        gameState.player_back.move(playerValues[0], playerValues[1]);
        gameState.enemy1_back.move(bot1Values[0], bot1Values[1]);
        gameState.enemy2_back.move(bot2Values[0], bot2Values[1]);
        if(gameState.player_back.health <=0){
            gameOver = 1;
        }
        if((gameState.enemy1_back.health <=0)&&(gameState.enemy2_back.health <=0)){
            gameOver = 1;
        }
        State = 0;
        break;
}

if(gameOver){
    gameState.gameOver = this.add.image(500,500,gameOver);
    setTimeout(function() {                                  
        }, 10)
}
return State;
}