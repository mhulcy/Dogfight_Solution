
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
    }
        move(speed, wheelSetting){
            let num, angularMomentum;
            if(speed === 1){ num = 10; }
            if(speed === 2){ num = 20; }
            if(speed === 3){ num = 30; }
            if(wheelSetting === 1){angularMomentum = -9; }
            if(wheelSetting === 2){angularMomentum = -4.5;}
            if(wheelSetting === 3){angularMomentum = 0;}
            if(wheelSetting === 4){angularMomentum =4.5;}
            if(wheelSetting === 5){angularMomentum =9;}
            console.log('ran');
            

            var i = 0;                   
                function myLoop() {        
                setTimeout(function() {   

                gameState.player.x+=num*(Math.cos((gameState.player.angle - 90 )*(Math.PI/180))); 
                    gameState.player.y-=num*(Math.sin((gameState.player.angle + 90)*(Math.PI/180))); 
                 //   console.log(Math.cos(Math.PI));
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
                        }
    


