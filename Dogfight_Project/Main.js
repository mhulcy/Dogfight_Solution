


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

var game = new Phaser.Game(config);

function preload() {
   // this.load.setBaseURL('http://labs.phaser.io');

    //this.load.image('sky', 'assets/skies/space3.png');

    this.load.audio('Retro', 'images/2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3');
    this.load.image('player', 'images/US_p40.png');
	this.load.image('enemy', 'images/JAP_a6m.png'); //comment
    this.load.image('cloud', 'images/anime-clouds-png-2-transparent.png');
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
}

function create() {
    //this.add.image(400, 300, 'sky');

    gameState.cursors = this.input.keyboard.createCursorKeys();

	var background = this.add.image(500, 500, 'background');
	background.setScale(2.5);

    //var sfx = this.add.sound('Retro');
    //sfx.play();

	var cloud = this.add.image(250, 250, 'cloud');
	var cloud = this.add.image(750, 650, 'cloud');
	cloud.setScale(.5);

    gameState.player1 = new Plane(500, 800, 0, 100, 20);
    gameState.player = this.add.sprite(500, 800, 'player');
    gameState.enemy1 = this.add.sprite(600, 100, 'enemy');
    gameState.enemy2 = this.add.sprite(400, 100, 'enemy');

    //arrows position 3
    gameState.arrow1_3 = this.add.image(535, 770, 'arrow_speed1_position3');
    gameState.arrow1_3.setScale(.4);
    gameState.arrow1_3.visible = false;
    gameState.arrow2_3 = this.add.image(535, 770, 'arrow_speed2_position3');
    gameState.arrow2_3.setScale(.4);
    gameState.arrow2_3.visible = false;
    gameState.arrow3_3 = this.add.image(535, 770, 'arrow_speed3_position3');
    gameState.arrow3_3.setScale(.4);
    gameState.arrow3_3.visible = false;

    //arrows position 2
    gameState.arrow1_2 = this.add.image(535, 770, 'arrow_speed1_position2');
    gameState.arrow1_2.setScale(.4);
    gameState.arrow1_2.visible = false;
    gameState.arrow2_2 = this.add.image(535, 770, 'arrow_speed2_position2');
    gameState.arrow2_2.setScale(.4);
    gameState.arrow2_2.visible = false;
    gameState.arrow3_2 = this.add.image(535, 770, 'arrow_speed3_position2');
    gameState.arrow3_2.setScale(.4);
    gameState.arrow3_2.visible = false;

    //arrows position 4
    gameState.arrow1_4 = this.add.image(468, 770, 'arrow_speed1_position4');
    gameState.arrow1_4.setScale(4);
    gameState.arrow1_4.visible = false;
    gameState.arrow2_4 = this.add.image(468, 770, 'arrow_speed2_position4');
    gameState.arrow2_4.setScale(4);
    gameState.arrow2_4.visible = false;
    gameState.arrow3_4 = this.add.image(468, 770, 'arrow_speed3_position4');
    gameState.arrow3_4.setScale(4);
    gameState.arrow3_4.visible = false;

    //arrows position 5
    gameState.arrow1_5 = this.add.image(535, 770, 'arrow_speed1_position5');
    gameState.arrow1_5.setScale(4);
    gameState.arrow1_5.visible = false;
    gameState.arrow2_5 = this.add.image(535, 770, 'arrow_speed2_position5');
    gameState.arrow2_5.setScale(4);
    gameState.arrow2_5.visible = false;
    gameState.arrow3_5 = this.add.image(535, 770, 'arrow_speed3_position5');
    gameState.arrow3_5.setScale(4);
    gameState.arrow3_5.visible = false;

    //arrows position 1
    gameState.arrow1_1 = this.add.image(468, 770, 'arrow_speed1_position1');
    gameState.arrow1_1.setScale(4);
    gameState.arrow1_1.visible = false;
    gameState.arrow2_1 = this.add.image(468, 770, 'arrow_speed2_position1');
    gameState.arrow2_1.setScale(4);
    gameState.arrow2_1.visible = false;
    gameState.arrow3_1 = this.add.image(468, 770, 'arrow_speed3_position1');
    gameState.arrow3_1.setScale(4);
    gameState.arrow3_1.visible = false;

    
    gameState.player.setScale(2);
    gameState.enemy1.setScale(2);
    gameState.enemy2.setScale(2);

	gameState.cockpit = this.add.image(100, 900, 'cockpit');
	gameState.cockpit.setScale(.85);
	gameState.cockpit.visible = false;

	gameState.wheel = this.add.sprite(75, 895, 'wheel');
	gameState.wheel.setScale(.25);
	gameState.wheel.visible = false;

	gameState.throttle = this.add.image(140, 900, 'throttle');
	gameState.throttle.setScale(.9);
	gameState.throttle.visible = false;

	gameState.throttle_button = this.add.image(142.5, 930, 'throttle_button');
	gameState.throttle_button.setScale(.4);
	gameState.throttle_button.visible = false
    
    gameState.player.setInteractive();
    gameState.wheel.setInteractive();

    gameState.wheel.on('pointerdown', function () {
    })

    gameState.player.on('pointerdown', function () {
		gameState.wheel.visible = true;
		gameState.cockpit.visible = true;
		gameState.throttle.visible = true;
		gameState.throttle_button.visible = true;
    })
    //var wheel = this.add.image(800, 800, 'wheel');

	


    gameState.enemy1.angle = 180
    gameState.enemy2.angle = 180


    //setting for direction of move
    gameState.wheelSetting = 3;
    gameState.throttleSetting = 1;
}

function update() {
    console.log(gameState.wheelSetting)

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

    
    if (gameState.wheelSetting === 1) {
        if (gameState.throttleSetting === 1) {
            gameState.arrow1_1.visible = true;
            gameState.arrow2_1.visible = false;
            gameState.arrow3_1.visible = false;
            gameState.arrow1_2.visible = false;
            gameState.arrow2_2.visible = false;
            gameState.arrow3_2.visible = false;
            gameState.arrow1_3.visible = false;
            gameState.arrow2_3.visible = false;
            gameState.arrow3_3.visible = false;
            gameState.arrow1_4.visible = false;
            gameState.arrow2_4.visible = false;
            gameState.arrow3_4.visible = false;
            gameState.arrow1_5.visible = false;
            gameState.arrow2_5.visible = false;
            gameState.arrow3_5.visible = false;
        }
        if (gameState.throttleSetting === 2) {
            gameState.arrow1_1.visible = false;
            gameState.arrow2_1.visible = true;
            gameState.arrow3_1.visible = false;
            gameState.arrow1_2.visible = false;
            gameState.arrow2_2.visible = false;
            gameState.arrow3_2.visible = false;
            gameState.arrow1_3.visible = false;
            gameState.arrow2_3.visible = false;
            gameState.arrow3_3.visible = false;
            gameState.arrow1_4.visible = false;
            gameState.arrow2_4.visible = false;
            gameState.arrow3_4.visible = false;
            gameState.arrow1_5.visible = false;
            gameState.arrow2_5.visible = false;
            gameState.arrow3_5.visible = false;
        }
        if (gameState.throttleSetting === 3) {
            gameState.arrow1_1.visible = false;
            gameState.arrow2_1.visible = false;
            gameState.arrow3_1.visible = true;
            gameState.arrow1_2.visible = false;
            gameState.arrow2_2.visible = false;
            gameState.arrow3_2.visible = false;
            gameState.arrow1_3.visible = false;
            gameState.arrow2_3.visible = false;
            gameState.arrow3_3.visible = false;
            gameState.arrow1_4.visible = false;
            gameState.arrow2_4.visible = false;
            gameState.arrow3_4.visible = false;
            gameState.arrow1_5.visible = false;
            gameState.arrow2_5.visible = false;
            gameState.arrow3_5.visible = false;
        }
    }
    if (gameState.wheelSetting === 2) {
        if (gameState.throttleSetting === 1) {
            gameState.arrow1_1.visible = false;
            gameState.arrow2_1.visible = false;
            gameState.arrow3_1.visible = false;
            gameState.arrow1_2.visible = true;
            gameState.arrow2_2.visible = false;
            gameState.arrow3_2.visible = false;
            gameState.arrow1_3.visible = false;
            gameState.arrow2_3.visible = false;
            gameState.arrow3_3.visible = false;
            gameState.arrow1_4.visible = false;
            gameState.arrow2_4.visible = false;
            gameState.arrow3_4.visible = false;
            gameState.arrow1_5.visible = false;
            gameState.arrow2_5.visible = false;
            gameState.arrow3_5.visible = false;
        }
        if (gameState.throttleSetting === 2) {
            gameState.arrow1_1.visible = false;
            gameState.arrow2_1.visible = false;
            gameState.arrow3_1.visible = false;
            gameState.arrow1_2.visible = false;
            gameState.arrow2_2.visible = true;
            gameState.arrow3_2.visible = false;
            gameState.arrow1_3.visible = false;
            gameState.arrow2_3.visible = false;
            gameState.arrow3_3.visible = false;
            gameState.arrow1_4.visible = false;
            gameState.arrow2_4.visible = false;
            gameState.arrow3_4.visible = false;
            gameState.arrow1_5.visible = false;
            gameState.arrow2_5.visible = false;
            gameState.arrow3_5.visible = false;
        }
        if (gameState.throttleSetting === 3) {
            gameState.arrow1_1.visible = false;
            gameState.arrow2_1.visible = false;
            gameState.arrow3_1.visible = false;
            gameState.arrow1_2.visible = false;
            gameState.arrow2_2.visible = false;
            gameState.arrow3_2.visible = true;
            gameState.arrow1_3.visible = false;
            gameState.arrow2_3.visible = false;
            gameState.arrow3_3.visible = false;
            gameState.arrow1_4.visible = false;
            gameState.arrow2_4.visible = false;
            gameState.arrow3_4.visible = false;
            gameState.arrow1_5.visible = false;
            gameState.arrow2_5.visible = false;
            gameState.arrow3_5.visible = false;
        }
    }
    if (gameState.wheelSetting === 3) {
        if (gameState.throttleSetting === 1) {
            gameState.arrow1_1.visible = false;
            gameState.arrow2_1.visible = false;
            gameState.arrow3_1.visible = false;
            gameState.arrow1_2.visible = false;
            gameState.arrow2_2.visible = false;
            gameState.arrow3_2.visible = false;
            gameState.arrow1_3.visible = true;
            gameState.arrow2_3.visible = false;
            gameState.arrow3_3.visible = false;
            gameState.arrow1_4.visible = false;
            gameState.arrow2_4.visible = false;
            gameState.arrow3_4.visible = false;
            gameState.arrow1_5.visible = false;
            gameState.arrow2_5.visible = false;
            gameState.arrow3_5.visible = false;
        }
        if (gameState.throttleSetting === 2) {
            gameState.arrow1_1.visible = false;
            gameState.arrow2_1.visible = false;
            gameState.arrow3_1.visible = false;
            gameState.arrow1_2.visible = false;
            gameState.arrow2_2.visible = false;
            gameState.arrow3_2.visible = false;
            gameState.arrow1_3.visible = false;
            gameState.arrow2_3.visible = true;
            gameState.arrow3_3.visible = false;
            gameState.arrow1_4.visible = false;
            gameState.arrow2_4.visible = false;
            gameState.arrow3_4.visible = false;
            gameState.arrow1_5.visible = false;
            gameState.arrow2_5.visible = false;
            gameState.arrow3_5.visible = false;
        }
        if (gameState.throttleSetting === 3) {
            gameState.arrow1_1.visible = false;
            gameState.arrow2_1.visible = false;
            gameState.arrow3_1.visible = false;
            gameState.arrow1_2.visible = false;
            gameState.arrow2_2.visible = false;
            gameState.arrow3_2.visible = false;
            gameState.arrow1_3.visible = false;
            gameState.arrow2_3.visible = false;
            gameState.arrow3_3.visible = true;
            gameState.arrow1_4.visible = false;
            gameState.arrow2_4.visible = false;
            gameState.arrow3_4.visible = false;
            gameState.arrow1_5.visible = false;
            gameState.arrow2_5.visible = false;
            gameState.arrow3_5.visible = false;
        }
    }
    if (gameState.wheelSetting === 4) {
        if (gameState.throttleSetting === 1) {
            gameState.arrow1_1.visible = false;
            gameState.arrow2_1.visible = false;
            gameState.arrow3_1.visible = false;
            gameState.arrow1_2.visible = false;
            gameState.arrow2_2.visible = false;
            gameState.arrow3_2.visible = false;
            gameState.arrow1_3.visible = false;
            gameState.arrow2_3.visible = false;
            gameState.arrow3_3.visible = false;
            gameState.arrow1_4.visible = true;
            gameState.arrow2_4.visible = false;
            gameState.arrow3_4.visible = false;
            gameState.arrow1_5.visible = false;
            gameState.arrow2_5.visible = false;
            gameState.arrow3_5.visible = false;
        }
        if (gameState.throttleSetting === 2) {
            gameState.arrow1_1.visible = false;
            gameState.arrow2_1.visible = false;
            gameState.arrow3_1.visible = false;
            gameState.arrow1_2.visible = false;
            gameState.arrow2_2.visible = false;
            gameState.arrow3_2.visible = false;
            gameState.arrow1_3.visible = false;
            gameState.arrow2_3.visible = false;
            gameState.arrow3_3.visible = false;
            gameState.arrow1_4.visible = true;
            gameState.arrow2_4.visible = false;
            gameState.arrow3_4.visible = false;
            gameState.arrow1_5.visible = false;
            gameState.arrow2_5.visible = false;
            gameState.arrow3_5.visible = false;
        }
        if (gameState.throttleSetting === 3) {
            gameState.arrow1_1.visible = false;
            gameState.arrow2_1.visible = false;
            gameState.arrow3_1.visible = false;
            gameState.arrow1_2.visible = false;
            gameState.arrow2_2.visible = false;
            gameState.arrow3_2.visible = false;
            gameState.arrow1_3.visible = false;
            gameState.arrow2_3.visible = false;
            gameState.arrow3_3.visible = false;
            gameState.arrow1_4.visible = false;
            gameState.arrow2_4.visible = false;
            gameState.arrow3_4.visible = true;
            gameState.arrow1_5.visible = false;
            gameState.arrow2_5.visible = false;
            gameState.arrow3_5.visible = false;
        }
    }
    if (gameState.wheelSetting === 5) {
        if (gameState.throttleSetting === 1) {
            gameState.arrow1_1.visible = false;
            gameState.arrow2_1.visible = false;
            gameState.arrow3_1.visible = false;
            gameState.arrow1_2.visible = false;
            gameState.arrow2_2.visible = false;
            gameState.arrow3_2.visible = false;
            gameState.arrow1_3.visible = false;
            gameState.arrow2_3.visible = false;
            gameState.arrow3_3.visible = false;
            gameState.arrow1_4.visible = false;
            gameState.arrow2_4.visible = false;
            gameState.arrow3_4.visible = false;
            gameState.arrow1_5.visible = true;
            gameState.arrow2_5.visible = false;
            gameState.arrow3_5.visible = false;
        }
        if (gameState.throttleSetting === 2) {
            gameState.arrow1_1.visible = false;
            gameState.arrow2_1.visible = false;
            gameState.arrow3_1.visible = false;
            gameState.arrow1_2.visible = false;
            gameState.arrow2_2.visible = false;
            gameState.arrow3_2.visible = false;
            gameState.arrow1_3.visible = false;
            gameState.arrow2_3.visible = false;
            gameState.arrow3_3.visible = false;
            gameState.arrow1_4.visible = false;
            gameState.arrow2_4.visible = false;
            gameState.arrow3_4.visible = false;
            gameState.arrow1_5.visible = false;
            gameState.arrow2_5.visible = true;
            gameState.arrow3_5.visible = false;
        }
        if (gameState.throttleSetting === 3) {
            gameState.arrow1_1.visible = false;
            gameState.arrow2_1.visible = false;
            gameState.arrow3_1.visible = false;
            gameState.arrow1_2.visible = false;
            gameState.arrow2_2.visible = false;
            gameState.arrow3_2.visible = false;
            gameState.arrow1_3.visible = false;
            gameState.arrow2_3.visible = false;
            gameState.arrow3_3.visible = false;
            gameState.arrow1_4.visible = false;
            gameState.arrow2_4.visible = false;
            gameState.arrow3_4.visible = false;
            gameState.arrow1_5.visible = false;
            gameState.arrow2_5.visible = false;
            gameState.arrow3_5.visible = true;
        }
    }
    //gameState.player.y -= 1;

    //arrow position 1
    gameState.arrow1_1.x = gameState.player.x + 30;
    gameState.arrow1_1.y = gameState.player.y - 20;

    gameState.arrow2_1.x = gameState.player.x + 30;
    gameState.arrow2_1.y = gameState.player.y - 35;

    gameState.arrow3_1.x = gameState.player.x + 30;
    gameState.arrow3_1.y = gameState.player.y - 50;

    //arrow position 2
    gameState.arrow1_2.x = gameState.player.x; 
    gameState.arrow1_2.y = gameState.player.y - 45;

    gameState.arrow2_2.x = gameState.player.x;
    gameState.arrow2_2.y = gameState.player.y - 60;   
    
    //Arrow position 3
    gameState.arrow1_3.x = gameState.player.x 
    gameState.arrow1_3.y = gameState.player.y - 45

    gameState.arrow2_3.x = gameState.player.x
    gameState.arrow2_3.y = gameState.player.y - 55

    gameState.arrow3_3.x = gameState.player.x
    gameState.arrow3_3.y = gameState.player.y - 70

    gameState.arrow1_4.x = gameState.player.x - 30
    gameState.arrow1_4.y = gameState.player.y - 20

    gameState.arrow2_4.x = gameState.player.x - 30
    gameState.arrow2_4.y = gameState.player.y - 35

    gameState.arrow3_4.x = gameState.player.x - 30
    gameState.arrow3_4.y = gameState.player.y - 50

    gameState.arrow1_5.x = gameState.player.x - 30
    gameState.arrow1_5.y = gameState.player.y - 20

    gameState.arrow2_5.x = gameState.player.x - 30
    gameState.arrow2_5.y = gameState.player.y - 35

    gameState.arrow3_5.x = gameState.player.x - 30
    gameState.arrow3_5.y = gameState.player.y - 50
}
