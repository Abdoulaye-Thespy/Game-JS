import 'phaser';
 let platforms;
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
  preload () {
    // load images
    this.load.image('logo', "../src/assets/logo.png");
  }
 
  create () {
    this.add.image(400, 300, 'sky');
    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'step').setScale(2).refreshBody();

    platforms.create(600, 300, 'step');
    platforms.create(50, 250, 'step');
    platforms.create(400, 220, 'step');
  }
};