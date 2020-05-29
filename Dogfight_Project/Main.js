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
	
}

function create() {
    //this.add.image(400, 300, 'sky');


    gameState.player = this.add.image(500, 800, 'player');
    gameState.enemy1 = this.add.image(600, 100, 'enemy');
	gameState.enemy2 = this.add.image(400, 100, 'enemy');
    //var wheel = this.add.image(800, 800, 'wheel');

	this.add.image(500, 500, 'cloud');


    gameState.enemy1.angle = 180
    gameState.enemy2.angle = 180

    
}

function update() {

} 