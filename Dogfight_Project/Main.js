
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
}

function create() {
    //this.add.image(400, 300, 'sky');

    var player = this.add.image(500, 800, 'player');
    var enemy1 = this.add.image(600, 100, 'enemy');
	var enemy2 = this.add.image(400, 100, 'enemy');

	this.add.image(500, 500, 'cloud');


    enemy1.angle = 180
    enemy2.angle = 180

    
}

function update() {

} 