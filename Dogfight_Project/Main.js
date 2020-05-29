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
	
}

function create() {
    //this.add.image(400, 300, 'sky');

    gameState.cursors = this.input.keyboard.createCursorKeys();

	var background = this.add.image(500, 500, 'background');
	background.setScale(2.5);

    gameState.player = this.add.sprite(500, 800, 'player');
    gameState.enemy1 = this.add.sprite(600, 100, 'enemy');
    gameState.enemy2 = this.add.sprite(400, 100, 'enemy');
    gameState.wheel = this.add.sprite(0, 0, 'wheel');
    gameState.wheel.setScale(.18);
    gameState.wheel.visible = false;
    
    gameState.player.setInteractive();
    gameState.wheel.setInteractive();

    gameState.wheel.on('pointerdown', function () {
    })

    gameState.player.on('pointerdown', function () {
        gameState.wheel.visible = true;
    })
    //var wheel = this.add.image(800, 800, 'wheel');

	this.add.image(500, 500, 'cloud');


    gameState.enemy1.angle = 180
    gameState.enemy2.angle = 180

    
}

function update() {
    gameState.wheel.x = gameState.player.x + 50;
    gameState.wheel.y = gameState.player.y;

    if (gameState.cursors.right.isDown) {
        gameState.codey.x += 5;
    }
} 