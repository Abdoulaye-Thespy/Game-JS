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

    platforms.create(400, 570, 'step').setScale(2.2).refreshBody();

    platforms.create(537, 400, 'step');
    platforms.create(265, 250, 'step');
    platforms.create(400, 120, 'step');
  }
};