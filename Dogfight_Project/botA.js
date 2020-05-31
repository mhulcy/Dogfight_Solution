class botA{
    constructor(x, y, angle, health, attack, defense) {
        this.x =x;
        this.y = y;
        this.angle = angle;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }
    takeDamage(amount){
        this.health -= amount;
        gameState.takeDamage.visible = true;
        gameState.takeDamage.play('expload');
        gameState.takeDamage.visible = false;
    }

    isStillTurn(){
        let wheel = 2, speed = 3;
        if(gameState.player.y  > this.y){
            if((Math.abs(this.angle) <270) &&(Math.abs(this.angle)>90) ){
                 wheel = Math.random();
                if(wheel < .5){
                    wheel = 1;
                }
                else{
                    wheel = 5;
                }
            }
        }
        else if(gameState.player.y <this .y){
            if(!(Math.abs(this.angle) <270) &&(Math.abs(this.angle)>90) ){
                let wheel = Math.random();
                if(wheel < .5){
                    wheel = 1;
                }
                else{
                    wheel = 5;
                }
            }

        }
        else{
            let wheel = Math.random();
                if(wheel < .2){
                    wheel = 1;
                }
                else if(wheel < .4) {
                    wheel = 2;
                }
                else if ( wheel < .6){
                    wheel = 3;
                }
                else if(wheel < .8){
                    wheel = 4;
                }
                else{
                    wheel = 5;
                }
            }
                speed = Math.random()
                if(speed < .33){
                    speed = 1;
                }
                else if(speed < .66){
                    speed = 2;
                }
                else {
                    speed = 3;
                }
        




        let values = [speed,wheel];
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

            gameState.enemy2.x+=num*(Math.cos((gameState.enemy2.angle - 90 )*(Math.PI/180))); 
             gameState.enemy2.y-=num*(Math.sin((gameState.enemy2.angle + 90)*(Math.PI/180))); 
             //   console.log(Math.cos(Math.PI));
             if(gameState.enemy2.y > 1000){
                gameState.enemy2.y = 0;
             }
             if(gameState.enemy2.y < 0){
                 gameState.enemy2.y = 1000;
             }
             if(gameState.enemy2.x > 1000){
                 gameState.enemy2.x = 0;
             }
             if(gameState.enemy2.x < 0){
                 gameState.enemy2.x = 1000;
             }

            this.x = gameState.enemy2.x;
            this.y = gameState.enemy2.y;
            this.angle = gameState.enemy2.angle;

                gameState.enemy2.angle +=angularMomentum;  
                i++;                    
                if (i < 10) {           
                myLoop();              
                }                       
            }, 10)
            }
        myLoop();  
    }
    useWeapon(){
        if(Shoot(this.x, this.y, this.angle, gameState.player.x, 
            gameState.player.y)){
                gameState.player_back.takeDamage(this.firePower);
            }
            
    }


}