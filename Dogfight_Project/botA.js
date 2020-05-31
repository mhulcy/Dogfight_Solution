class botA{
    constructor(x, y, angle, health, firePower) {
        this.x =x;
        this.y = y;
        this.angle = angle;
        this.health = health;
        this.firePower = firePower;
    }
    takeDamage(amount){
        this.health-= amount;
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


}