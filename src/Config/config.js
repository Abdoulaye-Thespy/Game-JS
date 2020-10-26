import 'phaser';
 
export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  zoom: 2,
  pixelArt: true,
  physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
     },
     scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },
};



   // type: Phaser.AUTO,
   //  parent: 'content',
   //  width: 320,
   //  height: 240,
   //  zoom: 2,
   //  pixelArt: true,
   //  physics: {
   //      default: 'arcade',
   //      arcade: {
   //          gravity: { y: 0 }
   //      }
   //  },
   //  scene: [
   //      BootScene,
   //      WorldScene
   //  ]