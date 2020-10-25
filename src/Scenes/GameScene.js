import 'phaser';
 let platforms;
 let player;
 let cursors;
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
    player = this.physics.add.sprite(150, 450, 'dude');

player.setBounce(0.2);
player.setCollideWorldBounds(true);
player.body.setGravityY(10)

this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'turn',
    frames: [ { key: 'dude', frame: 4 } ],
    frameRate: 20
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
});
this.physics.add.collider(player, platforms);
 cursors = this.input.keyboard.createCursorKeys();
  }

update () {
  if (cursors.left.isDown)
{
    player.setVelocityX(-160);

    player.anims.play('left', true);
}
else if (cursors.right.isDown)
{
    player.setVelocityX(160);

    player.anims.play('right', true);
}
else
{
    player.setVelocityX(0);

    player.anims.play('turn');
}

if (cursors.up.isDown && player.body.touching.down)
{
    player.setVelocityY(-330);
}
}

};