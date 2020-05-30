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
    this.load.image('player', 'images/US_p40.png');
	this.load.image('enemy', 'images/JAP_a6m.png'); //comment
    this.load.image('cloud', 'images/anime-clouds-png-2-transparent.png');
	this.load.image('wheel', 'images/wheel.png')
	this.load.image('background', 'images/pixel land.png');
	this.load.image('cockpit', 'images/gray box.png');
	this.load.image('throttle', 'images/smallbox.png');
	this.load.image('throttle_button', 'images/throttlebutton.png');
	
}

function create() {
    //this.add.image(400, 300, 'sky');

    gameState.cursors = this.input.keyboard.createCursorKeys();

	var background = this.add.image(500, 500, 'background');
	background.setScale(2.5);

	var cloud = this.add.image(250, 250, 'cloud');
	var cloud = this.add.image(750, 650, 'cloud');
	cloud.setScale(.5);

    gameState.player = this.add.sprite(500, 800, 'player');
    gameState.enemy1 = this.add.sprite(600, 100, 'enemy');
    gameState.enemy2 = this.add.sprite(400, 100, 'enemy');
    
    gameState.player.setScale(2);
    gameState.enemy1.setScale(2);
    gameState.enemy2.setScale(2);

	gameState.cockpit = this.add.image(100, 900, 'cockpit');
	gameState.cockpit.setScale(.85);
	gameState.cockpit.visible = false;

	gameState.wheel = this.add.sprite(75, 900, 'wheel');
	gameState.wheel.setScale(.4);
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

    
}

function update() {
    if (gameState.cursors.right.isDown) {
        gameState.wheel.angle += 5;
    }

    if (gameState.cursors.left.isDown) {
        gameState.wheel.angle -= 5;
    }









    

    if (gameState.cursors.down.isDown) {
        if(gameState.throttle_button.y < 925)
        gameState.throttle_button.y += 8;
    }

    if (gameState.cursors.up.isDown) {
        if(gameState.throttle_button.y > 800)
        gameState.throttle_button.y -= 8;
    }
} 
    