// Configuration for the game
// Other options that can be set in this config: 
// https://photonstorm.github.io/phaser3-docs/Phaser.Core.Config.html 
var config = {
    type: Phaser.AUTO,
    // width of the game
    width: 800,
    // height fo the game
    height: 450,
    // physics config
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            }
        }
    },
    // function names for the default engine events
    scene: {
        preload: preload,
        create: create,
        update: update,
        render: render
    }
};

// Create a new Phaser Game
var game = new Phaser.Game(config);

/**
 * Preload function
 * This function gets executed once at the start of the creation of the game scene
 *
 * Use this function to load all assets (images, music, sounds) into memory so you 
 * can use them later to build your game scene
 */
function preload() {
    // Example loading image from a url
    this.load.image('logo', 'https://hubben-amal.github.io/game-io-workshops/img/game-io-logo.png')
}

/**
 * Create function
 * This function gets executed once after the preload and create the game scene
 * 
 * Use this function to create and configure all your game elements in the scene
 */
function create() {
    // Add our preloaded image to the scene
    var logo = this.add.image(400, 225, 'logo');
    // scale it down
    logo.setScale(0.25);
}

/**
 * Main update loop
 * The code in this function gets executed on every game update (defaul 60 times per second)
 *
 * Use this function for all elements that change overtime
 */
function update() {

}

/**
 * Main render loop
 * The code in this function gets executed every time the screen is rendered (default 60 times per second)
 * 
 * !For basic games this function is not really needed!
 */
function render() {

}