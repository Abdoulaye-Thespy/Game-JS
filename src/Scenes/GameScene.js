import 'phaser';
import config from '../Config/config';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
  preload () {
    // load images
    this.load.image('logo', "../src/assets/logo.png");
  }
 
   onMeetEnemy (player, zone) {        
        zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
        zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
     this.spawns = this.physics.add.group({  key: 'star',setXY: { x: Phaser.Math.RND.between(80,90 ), 
    y: Phaser.Math.RND.between(0, this.physics.world.bounds.height), stepX: 70 }});
     this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);
          this.spawns.setVelocity(0, 10);
         this.bombs = this.physics.add.group({  key: 'bomb', repeat: 5, setXY: { x: Phaser.Math.RND.between(80,90 ), 
    y: Phaser.Math.RND.between(0, this.physics.world.bounds.height), stepX: 70 }});
     this.physics.add.overlap(this.player, this.bombs, this.onMeetEnemy, false, this);
          this.bombs.setVelocity(0, Phaser.Math.RND.between(10,100 ));
        

    };

deleteStar (obstacles, star)
{
    star.disableBody(true, true);
}

  create () {
    
let map = this.make.tilemap({ key: 'map' });
        
 let tiles = map.addTilesetImage('spritesheet', 'tiles');
        
 let grass = map.createStaticLayer('Grass', tiles, 0, 0);
        let obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
        obstacles.setCollisionByExclusion([-1]);
   this.player = this.physics.add.sprite(0, 580, 'player', 6);
        this.physics.world.bounds.width = map.widthInPixels;
        this.physics.world.bounds.height = map.heightInPixels;
        this.player.setCollideWorldBounds(true);
    
       this.cursors = this.input.keyboard.createCursorKeys();
        this.cameras.main.setBounds(-160, -60, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.roundPixels = true;
           //  animation with key 'left', we don't need left and right as we will use one and flip the sprite
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13]}),
            frameRate: 10,
            repeat: -1
        });
        
        // animation with key 'right'
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13] }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { frames: [2, 8, 2, 14]}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 0, 6, 0, 12 ] }),
            frameRate: 10,
            repeat: -1
        });
        1
    
 this.physics.add.collider(this.player, obstacles);

  this.spawns = this.physics.add.group({  key: 'star', repeat: 5,setXY: { x: Phaser.Math.RND.between(80,90 ), 
    y: Phaser.Math.RND.between(0, this.physics.world.bounds.height), stepX: 70 }});
        
          this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);
          this.spawns.setVelocity(0, 10);
          this.physics.add.collider(this.spawns, obstacles);
          this.physics.add.collider(this.spawns, tiles);

            }


update (time, delta)
{
 this.player.body.setVelocity(0);
 
        // Horizontal movement
        if (this.cursors.left.isDown)
        {
            this.player.body.setVelocityX(-80);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.setVelocityX(80);
        }
 
        // Vertical movement
        if (this.cursors.up.isDown)
        {
            this.player.body.setVelocityY(-80);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.body.setVelocityY(80);
        }  
         if (this.cursors.left.isDown)
        {
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.anims.play('right', true);
        }
        else if (this.cursors.up.isDown)
        {
            this.player.anims.play('up', true);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.anims.play('down', true);
        }
        else
        {
            this.player.anims.stop();
        }  
}

};