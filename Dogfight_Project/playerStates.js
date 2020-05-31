function playerStates(State){
    switch(State){
        case 7:
            gameState.playerHealth7 = this.add.image(gameState.player_back.x, gameState.player_back.y - 50, 'playerHealth7').setScale(.5);
            if(player_back.health == 6){
                State = 6;
            }else if(player_back.health == 5){
                State = 5;
            }
            break;
        case 6:
            this.add.image('playerHealth7').setVisible(false);
            gameState.playerHealth6 = this.add.image('playerHealth6').setScale(.5);
            if(player_back.health == 5){
                State = 5;
            }else if(player_back.health == 4){
                State = 4;
            }
            break;
        case 5:
            this.add.image('playerHealth7').setVisible(false);
            this.add.image('playerHealth6').setVisible(false);
            gameState.playerHealth5 = this.add.image('playerHealth5').setScale(.5);
            if(player_back.health == 4){
                State = 4;
            }else if(player_back.health == 3){
                State = 3;
            }
            break;
        case 4:
            this.add.image('playerHealth6').setVisible(false);
            this.add.image('playerHealth5').setVisible(false);
            gameState.playerHealth4 = this.add.image('playerHealth4').setScale(.5);
            if(player_back.health == 3){
                State = 3;
            }else if(player_back.health == 2){
                State = 2;
            }
            break;
        case 3:
            this.add.image('playerHealth5').setVisible(false);
            this.add.image('playerHealth4').setVisible(false);
            gameState.playerHealth3 = this.add.image('playerHealth3').setScale(.5);
            if(player_back.health == 2){
                State = 2;
            }else if(player_back.health == 1){
                State = 1;
            }
            break;
        case 2:
            this.add.image('playerHealth4').setVisible(false);
            this.add.image('playerHealth3').setVisible(false);
            gameState.playerHealth2 = this.add.image('playerHealth2').setScale(.5);
            if(player_back.health == 1){
                State = 1;
            }else if(player_back.health == 0){
                State = 0;
            }
            break;
        case 1:
            this.add.image('playerHealth3').setVisible(false);
            this.add.image('playerHealth2').setVisible(false);
            gameState.playerHealth1 = this.add.image('playerHealth1').setScale(.5);
            if(player_back.health == 0){
                State = 0;
            }
            break;
        case 0:
            this.add.image('playerHealth2').setVisible(false);
            this.add.image('playerHealth1').setVisible(false);
            this.add.image('player').setVisible(false);
            break;
    }
    return State;
}