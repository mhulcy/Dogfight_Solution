


let increment = 0;
const gameState = {}

var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 1000,
    backgroundColor: "#039dfc",
    scene: {
        preload: preload,
        create: create,
        update: update
    }
    
};

var State = 0;
var stillTurn = true;
var gameOver = false;
var game = new Phaser.Game(config);

function preload() {
   // this.load.setBaseURL('http://labs.phaser.io');

    //this.load.image('sky', 'assets/skies/space3.png');

    this.load.audio('Retro', 'images/2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3');
    this.load.image('player', 'images/US_p40.png');
	this.load.image('enemy', 'images/JAP_a6m.png'); //comment
    this.load.image('cloud', 'images/anime-clouds-png-2-transparent.png');
    this.load.image('cloud1', 'images/anime-clouds-png-2-transparent.png');
    this.load.image('cloud2', 'images/anime-clouds-png-2-transparent.png');
	this.load.image('wheel', 'images/wheel.png');
	this.load.image('background', 'images/pixel land.png');
	this.load.image('cockpit', 'images/gray box.png');
	this.load.image('throttle', 'images/smallbox.png');
	this.load.image('throttle_button', 'images/throttlebutton.png');
    this.load.image('arrow_speed1_position3', 'images/Arrow_Speed1_Position3.png');
    this.load.image('arrow_speed2_position3', 'images/Arrow_Speed2_Position3.png');
    this.load.image('arrow_speed3_position3', 'images/Arrow_Speed3_Position3.png');
    this.load.image('arrow_speed1_position2', 'images/Arrow_Speed1_Position2.png');
    this.load.image('arrow_speed2_position2', 'images/Arrow_Speed2_Position2.png');
    this.load.image('arrow_speed3_position2', 'images/Arrow_Speed3_Position2.png');
    this.load.image('arrow_speed1_position4', 'images/Arrow_Speed1_Position4.png');
    this.load.image('arrow_speed2_position4', 'images/Arrow_Speed2_Position4.png');
    this.load.image('arrow_speed3_position4', 'images/Arrow_Speed3_Position4.png');
    this.load.image('arrow_speed1_position1', 'images/Arrow_Speed1_Position1.png');
    this.load.image('arrow_speed2_position1', 'images/Arrow_Speed2_Position1.png');
    this.load.image('arrow_speed3_position1', 'images/Arrow_Speed3_Position1.png');
    this.load.image('arrow_speed1_position5', 'images/Arrow_Speed1_Position5.png');
    this.load.image('arrow_speed2_position5', 'images/Arrow_Speed2_Position5.png');
    this.load.image('arrow_speed3_position5', 'images/Arrow_Speed3_Position5.png');
    this.load.spritesheet('enemy gunfire', 'images/enemy_gunfire.png', {frameWidth: 111, framHeight: 50});
}

function create() {
    //this.add.image(400, 300, 'sky');

    gameState.cursors = this.input.keyboard.createCursorKeys();


	var background = this.add.image(500, 500, 'background');
    background.setScale(2.5);


    //gameState.enemy_gunfire = this.add.sprite(500, 500, 'enemy gunfire', 0);


    this.anims.create({
        key: 'shoot',
        repeat: -1,
        frameRate: 10,
        frames: this.anims.generateFrameNames('enemy gunfire', { start: 1, end: 3 })
    })
    


    //var sfx = this.add.sound('Retro');
    //sfx.play();
    
	gameState.cloud = this.add.image(250, 250, 'cloud');
    gameState.cloud1 = this.add.image(750, 650, 'cloud');
    gameState.cloud2 = this.add.image(100, 850, 'cloud');
	gameState.cloud.setScale(.5);
    gameState.cloud1.setScale(.5);
    gameState.cloud2.setScale(.5);
  
    gameState.player = this.add.container(500, 800, [this.add.sprite(0, 0, 'player').setScale(2), this.add.sprite(-5, -40, 'enemy gunfire', 0), this.add.image(20, -50, 'arrow_speed1_position1').setScale(3).setVisible(false), this.add.image(20, -50, 'arrow_speed2_position1').setScale(3).setVisible(false), this.add.image(20, -50, 'arrow_speed3_position1').setScale(3).setVisible(false), this.add.image(0, -75, 'arrow_speed1_position2').setScale(.3).setVisible(false), this.add.image(0, -75, 'arrow_speed2_position2').setScale(.3).setVisible(false), this.add.image(0, -75, 'arrow_speed3_position2').setScale(.3).setVisible(false), this.add.image(0, 0, 'arrow_speed1_position3').setScale(.3).setVisible(false), this.add.image(0, 0, 'arrow_speed2_position3').setScale(.3).setVisible(false), this.add.image(0, 0, 'arrow_speed3_position3').setScale(.3).setVisible(false), this.add.image(0, 0, 'arrow_speed1_position4').setScale(.3).setVisible(false), this.add.image(0, 0, 'arrow_speed2_position4').setScale(.3).setVisible(false), this.add.image(0, 0, 'arrow_speed3_position4').setScale(.3).setVisible(false), this.add.image(0, 0, 'arrow_speed1_position5').setScale(.3).setVisible(false), this.add.image(0, 0, 'arrow_speed2_position5').setScale(.3).setVisible(false), this.add.image(0, 0, 'arrow_speed3_position5').setScale(.3).setVisible(false)]);
    gameState.player.list[1].setScale(.25)
    gameState.player.list[1].play('shoot');

    gameState.player_back = new Plane(500, 800, 0, 100, 20);
    gameState.enemy1 = this.add.sprite(600, 100, 'enemy');
    gameState.enemy1_back = new bot(600, 100, 180, 100, 20);
    gameState.enemy2 = this.add.sprite(400, 100, 'enemy');
    gameState.enemy2_back = new botA(400, 100, 180, 100, 20);



    
   // gameState.player.setScale(2);
    gameState.enemy1.setScale(2);
    gameState.enemy2.setScale(2);

	gameState.cockpit = this.add.image(100, 900, 'cockpit');
	gameState.cockpit.setScale(.85);
	

	gameState.wheel = this.add.sprite(75, 895, 'wheel');
	gameState.wheel.setScale(.25);
	

	gameState.throttle = this.add.image(140, 900, 'throttle');
	gameState.throttle.setScale(.9);
	

	gameState.throttle_button = this.add.image(142.5, 930, 'throttle_button');
	gameState.throttle_button.setScale(.4);
	
    
   

  

 
    //var wheel = this.add.image(800, 800, 'wheel');

	


    gameState.enemy1.angle = 180
    gameState.enemy2.angle = 180


    //setting for direction of move
    gameState.wheelSetting = 3;
    gameState.throttleSetting = 1;
}

function update() {
    
    if(!increment){
        gameState.player_back.move(3, 2);
        ++ increment;
        gameState.enemy1_back.move(3,2);
        gameState.enemy2_back.move(3,4);
    }

    switch(State){
        case 0:    
            while(!stillTurn  && !gameOver){
                //if(!Plane.isStillTurn()){
                    
                //}
                Plane;
            }
            //console.log('player');
            State = 1;
            break;
        case 1:
            while(!stillTurn && !gameOver){
                //if(!Bot1.isStillTurn()){

                //}
                Plane;
            }
            //console.log('bot1');
            State = 2;
            break;
        case 2:
            while(!stillTurn && !gameOver){
                //if(!Bot2.isStillTurn()){

                //}
                Plane;
            }
            //console.log('bot2');
            State = 0;
            break;
    }

    if(gameOver){
        
    }

    if (gameState.wheel.angle < -54)
        gameState.wheelSetting = 1;
    if (gameState.wheel.angle >= -54 && gameState.wheel.angle < -18)
        gameState.wheelSetting = 2;
    if (gameState.wheel.angle >= -18 && gameState.wheel.angle < 18)
        gameState.wheelSetting = 3;
    if (gameState.wheel.angle >= 18 && gameState.wheel.angle < 54)
        gameState.wheelSetting = 4;
    if (gameState.wheel.angle > 54)
        gameState.wheelSetting = 5;

    if (gameState.cursors.right.isDown) {
        if (gameState.wheel.angle < 90)
            gameState.wheel.angle += 2;
    }

    if (gameState.cursors.left.isDown) {
        if (gameState.wheel.angle > -90)
            gameState.wheel.angle -= 2;
    }

    if (gameState.cursors.down.isDown) {
        if (gameState.throttle_button.y < 925) {
            gameState.throttle_button.y += 2
        }
    }
    if (gameState.cursors.up.isDown) {
        if (gameState.throttle_button.y > 865) {
            gameState.throttle_button.y -= 2
        }
    }

    if (gameState.throttle_button.y > 905) {
        gameState.throttleSetting = 1
    }
    if (gameState.throttle_button.y <= 905 && gameState.throttle_button.y >= 885) {
        gameState.throttleSetting = 2
    }
    if (gameState.throttle_button.y < 885) {
        gameState.throttleSetting = 3
    }
    
    if(gameState.cloud.x >= -150){
        gameState.cloud.x -= 0.3;
    }else{
        gameState.cloud.y = Math.random() * 1000;
        gameState.cloud.x = 1150;
    }

    if(gameState.cloud1.x >= -150){
        gameState.cloud1.x -= 0.3;
    }else{
        gameState.cloud1.y = Math.random() * 1000;
        gameState.cloud1.x = 1150;
    }

    if(gameState.cloud2.x >= -150){
        gameState.cloud2.x -= 0.3;
    }else{
        gameState.cloud2.y = Math.random() * 1000;
        gameState.cloud2.x = 1150;
    }

    
    if (gameState.wheelSetting === 1) {
        if (gameState.throttleSetting === 1) {
           gameState.player.list[2].visible = true;
           gameState.player.list[3].visible = false;
           gameState.player.list[4].visible = false;
           gameState.player.list[5].visible = false;
           gameState.player.list[6].visible = false;
           gameState.player.list[7].visible = false;
           gameState.player.list[8].visible = false;
           gameState.player.list[9].visible = false;
           gameState.player.list[10].visible = false;
           gameState.player.list[11].visible = false;
           gameState.player.list[12].visible = false;
           gameState.player.list[13].visible = false;
           gameState.player.list[14].visible = false;
           gameState.player.list[15].visible = false;
           gameState.player.list[16].visible = false;
        }
        if (gameState.throttleSetting === 2) {
           gameState.player.list[2].visible = false;
           gameState.player.list[3].visible = true;
           gameState.player.list[4].visible = false;
           gameState.player.list[5].visible = false;
           gameState.player.list[6].visible = false;
           gameState.player.list[7].visible = false;
           gameState.player.list[8].visible = false;
           gameState.player.list[9].visible = false;
           gameState.player.list[10].visible = false;
           gameState.player.list[11].visible = false;
           gameState.player.list[12].visible = false;
           gameState.player.list[13].visible = false;
           gameState.player.list[14].visible = false;
           gameState.player.list[15].visible = false;
           gameState.player.list[16].visible = false;
        }
        if (gameState.throttleSetting === 3) {
           gameState.player.list[2].visible = false;
           gameState.player.list[3].visible = false;
           gameState.player.list[4].visible = true;
           gameState.player.list[5].visible = false;
           gameState.player.list[6].visible = false;
           gameState.player.list[7].visible = false;
           gameState.player.list[8].visible = false;
           gameState.player.list[9].visible = false;
           gameState.player.list[10].visible = false;
           gameState.player.list[11].visible = false;
           gameState.player.list[12].visible = false;
           gameState.player.list[13].visible = false;
           gameState.player.list[14].visible = false;
           gameState.player.list[15].visible = false;
           gameState.player.list[16].visible = false;
        }
    }
    if (gameState.wheelSetting === 2) {
        if (gameState.throttleSetting === 1) {
           gameState.player.list[2].visible = false;
           gameState.player.list[3].visible = false;
           gameState.player.list[4].visible = false;
           gameState.player.list[5].visible = true;
           gameState.player.list[6].visible = false;
           gameState.player.list[7].visible = false;
           gameState.player.list[8].visible = false;
           gameState.player.list[9].visible = false;
           gameState.player.list[10].visible = false;
           gameState.player.list[11].visible = false;
           gameState.player.list[12].visible = false;
           gameState.player.list[13].visible = false;
           gameState.player.list[14].visible = false;
           gameState.player.list[15].visible = false;
           gameState.player.list[16].visible = false;
        }
        if (gameState.throttleSetting === 2) {
           gameState.player.list[2].visible = false;
           gameState.player.list[3].visible = false;
           gameState.player.list[4].visible = false;
           gameState.player.list[5].visible = false;
           gameState.player.list[6].visible = true;
           gameState.player.list[7].visible = false;
           gameState.player.list[8].visible = false;
           gameState.player.list[9].visible = false;
           gameState.player.list[10].visible = false;
           gameState.player.list[11].visible = false;
           gameState.player.list[12].visible = false;
           gameState.player.list[13].visible = false;
           gameState.player.list[14].visible = false;
           gameState.player.list[15].visible = false;
           gameState.player.list[16].visible = false;
        }
        if (gameState.throttleSetting === 3) {
           gameState.player.list[2].visible = false;
           gameState.player.list[3].visible = false;
           gameState.player.list[4].visible = false;
           gameState.player.list[5].visible = false;
           gameState.player.list[6].visible = false;
           gameState.player.list[7].visible = true;
           gameState.player.list[8].visible = false;
           gameState.player.list[9].visible = false;
           gameState.player.list[10].visible = false;
           gameState.player.list[11].visible = false;
           gameState.player.list[12].visible = false;
           gameState.player.list[13].visible = false;
           gameState.player.list[14].visible = false;
           gameState.player.list[15].visible = false;
           gameState.player.list[16].visible = false;
        }
    }
    if (gameState.wheelSetting === 3) {
        if (gameState.throttleSetting === 1) {
           gameState.player.list[2].visible = false;
           gameState.player.list[3].visible = false;
           gameState.player.list[4].visible = false;
           gameState.player.list[5].visible = false;
           gameState.player.list[6].visible = false;
           gameState.player.list[7].visible = false;
           gameState.player.list[8].visible = true;
           gameState.player.list[9].visible = false;
           gameState.player.list[10].visible = false;
           gameState.player.list[11].visible = false;
           gameState.player.list[12].visible = false;
           gameState.player.list[13].visible = false;
           gameState.player.list[14].visible = false;
           gameState.player.list[15].visible = false;
           gameState.player.list[16].visible = false;
        }
        if (gameState.throttleSetting === 2) {
           gameState.player.list[2].visible = false;
           gameState.player.list[3].visible = false;
           gameState.player.list[4].visible = false;
           gameState.player.list[5].visible = false;
           gameState.player.list[6].visible = false;
           gameState.player.list[7].visible = false;
           gameState.player.list[8].visible = false;
           gameState.player.list[9].visible = true;
           gameState.player.list[10].visible = false;
           gameState.player.list[11].visible = false;
           gameState.player.list[12].visible = false;
           gameState.player.list[13].visible = false;
           gameState.player.list[14].visible = false;
           gameState.player.list[15].visible = false;
           gameState.player.list[16].visible = false;
        }
        if (gameState.throttleSetting === 3) {
           gameState.player.list[2].visible = false;
           gameState.player.list[3].visible = false;
           gameState.player.list[4].visible = false;
           gameState.player.list[5].visible = false;
           gameState.player.list[6].visible = false;
           gameState.player.list[7].visible = false;
           gameState.player.list[8].visible = false;
           gameState.player.list[9].visible = false;
           gameState.player.list[10].visible = true;
           gameState.player.list[11].visible = false;
           gameState.player.list[12].visible = false;
           gameState.player.list[13].visible = false;
           gameState.player.list[14].visible = false;
           gameState.player.list[15].visible = false;
           gameState.player.list[16].visible = false;
        }
    }
    if (gameState.wheelSetting === 4) {
        if (gameState.throttleSetting === 1) {
           gameState.player.list[2].visible = false;
           gameState.player.list[3].visible = false;
           gameState.player.list[4].visible = false;
           gameState.player.list[5].visible = false;
           gameState.player.list[6].visible = false;
           gameState.player.list[7].visible = false;
           gameState.player.list[8].visible = false;
           gameState.player.list[9].visible = false;
           gameState.player.list[10].visible = false;
           gameState.player.list[11].visible = true;
           gameState.player.list[12].visible = false;
           gameState.player.list[13].visible = false;
           gameState.player.list[14].visible = false;
           gameState.player.list[15].visible = false;
           gameState.player.list[16].visible = false;
        }
        if (gameState.throttleSetting === 2) {
           gameState.player.list[2].visible = false;
           gameState.player.list[3].visible = false;
           gameState.player.list[4].visible = false;
           gameState.player.list[5].visible = false;
           gameState.player.list[6].visible = false;
           gameState.player.list[7].visible = false;
           gameState.player.list[8].visible = false;
           gameState.player.list[9].visible = false;
           gameState.player.list[10].visible = false;
           gameState.player.list[11].visible = false;
           gameState.player.list[12].visible = true;
           gameState.player.list[13].visible = false;
           gameState.player.list[14].visible = false;
           gameState.player.list[15].visible = false;
           gameState.player.list[16].visible = false;
        }
        if (gameState.throttleSetting === 3) {
           gameState.player.list[2].visible = false;
           gameState.player.list[3].visible = false;
           gameState.player.list[4].visible = false;
           gameState.player.list[5].visible = false;
           gameState.player.list[6].visible = false;
           gameState.player.list[7].visible = false;
           gameState.player.list[8].visible = false;
           gameState.player.list[9].visible = false;
           gameState.player.list[10].visible = false;
           gameState.player.list[11].visible = false;
           gameState.player.list[12].visible = false;
           gameState.player.list[13].visible = true;
           gameState.player.list[14].visible = false;
           gameState.player.list[15].visible = false;
           gameState.player.list[16].visible = false;
        }
    }
    if (gameState.wheelSetting === 5) {
        if (gameState.throttleSetting === 1) {
           gameState.player.list[2].visible = false;
           gameState.player.list[3].visible = false;
           gameState.player.list[4].visible = false;
           gameState.player.list[5].visible = false;
           gameState.player.list[6].visible = false;
           gameState.player.list[7].visible = false;
           gameState.player.list[8].visible = false;
           gameState.player.list[9].visible = false;
           gameState.player.list[10].visible = false;
           gameState.player.list[11].visible = false;
           gameState.player.list[12].visible = false;
           gameState.player.list[13].visible = false;
           gameState.player.list[14].visible = true;
           gameState.player.list[15].visible = false;
           gameState.player.list[16].visible = false;
        }
        if (gameState.throttleSetting === 2) {
           gameState.player.list[2].visible = false;
           gameState.player.list[3].visible = false;
           gameState.player.list[4].visible = false;
           gameState.player.list[5].visible = false;
           gameState.player.list[6].visible = false;
           gameState.player.list[7].visible = false;
           gameState.player.list[8].visible = false;
           gameState.player.list[9].visible = false;
           gameState.player.list[10].visible = false;
           gameState.player.list[11].visible = false;
           gameState.player.list[12].visible = false;
           gameState.player.list[13].visible = false;
           gameState.player.list[14].visible = false;
           gameState.player.list[15].visible = true;
           gameState.player.list[16].visible = false;
        }
        if (gameState.throttleSetting === 3) {
           gameState.player.list[2].visible = false;
           gameState.player.list[3].visible = false;
           gameState.player.list[4].visible = false;
           gameState.player.list[5].visible = false;
           gameState.player.list[6].visible = false;
           gameState.player.list[7].visible = false;
           gameState.player.list[8].visible = false;
           gameState.player.list[9].visible = false;
           gameState.player.list[10].visible = false;
           gameState.player.list[11].visible = false;
           gameState.player.list[12].visible = false;
           gameState.player.list[13].visible = false;
           gameState.player.list[14].visible = false;
           gameState.player.list[15].visible = false;
           gameState.player.list[16].visible = true;
        }
    }
    

    
}

