
class Plane{
    constructor(x, y, angle, health, firePower) {
        this.x =x;
        this.y = y;
        this.angle = angle;
        this.health = health;
        this.firePower = firePower;
    }
       takeDamage(damageReceived){
           this.health -= damageReceived;
           gameState.takeDamage.visible = true;
           console.log('good');
           gameState.takeDamage.play('expload');
           gameState.takeDamage.visible = false;
    }

    isStillTurn(){
        let speed = 0,wheel = 0;
        while(!ButtonPressed){
            speed = gameState.throttleSetting;
            wheel = gameState.wheelSetting;
            if (gameState.cursors.space.isDown) {
                ButtonPressed = true;
            }
        }
        ButtonPressed = false;
        let values = [speed, wheel];
        return values;
    }

        move(speed, wheelSetting){
            let num, angularMomentum;
            if(speed === 1){ num = 10; }
            if(speed === 2){ num = 15; }
            if(speed === 3){ num = 20; }
            if(wheelSetting === 1){angularMomentum = -9; }
            if(wheelSetting === 2){angularMomentum = -4.5;}
            if(wheelSetting === 3){angularMomentum = 0;}
            if(wheelSetting === 4){angularMomentum =4.5;}
            if(wheelSetting === 5){angularMomentum =9;}
    
            var i = 0;                   
            function myLoop() {        
                setTimeout(function() {   

                gameState.player.x+=num*(Math.cos((gameState.player.angle - 90 )*(Math.PI/180))); 
                 gameState.player.y-=num*(Math.sin((gameState.player.angle + 90)*(Math.PI/180))); 
                 //   console.log(Math.cos(Math.PI));
                 if(gameState.player.y > 1000){
                    gameState.player.y = 0;
                 }
                 if(gameState.player.y < 0){
                     gameState.player.y = 1000;
                 }
                 if(gameState.player.x > 1000){
                     gameState.player.x = 0;
                 }
                 if(gameState.player.x < 0){
                     gameState.player.x = 1000;
                 }

                this.x = gameState.player.x;
                this.y = gameState.player.y;
                this.angle = gameState.player.angle;
            

                    gameState.player.angle +=angularMomentum;  
                    i++;                    
                    if (i < 10) {           
                    myLoop();              
                    }                       
                }, 10)
                }
            myLoop();  
        }
        useWeapon(){
            if(Shoot(gameState.player.x, gameState.y, gameState.player.angle, gameState.enemy1.x, 
                gameState.enemy1.y)){
                    let dice1 = Math.random();
                    let dice2 = Math.random();
                    let damage, defense;
                    if(dice1 < .33){
                        damage = 1;
                    }
                    else if(dice1 > .66){
                        damage = 3;
                    }
                    else{
                        damage = 2;
                    }
    
                    if(dice2 < .5){
                        defense = 1;
                    }
                    else {
                        defense = 2;
                    }
    
                    damage -= this.defense;
                    gameState.player_back.takeDamage(damage);
                }
                
                if(Shoot(gameState.player.x, gameState.player.y, gameState.player.angle, gameState.enemy2.x, 
                    gameState.enemy2.y)){
                        let dice1 = Math.random();
                        let dice2 = Math.random();
                        let damage, defense;
                        if(dice1 < .33){
                            damage = 1;
                        }
                        else if(dice1 > .66){
                            damage = 3;
                        }
                        else{
                            damage = 2;
                        }
        
                        if(dice2 < .5){
                            defense = 1;
                        }
                        else {
                            defense = 2;
                        }
        
                        damage -= this.defense;
                        gameState.player_back.takeDamage(damage);
                    }
        }
}
    


