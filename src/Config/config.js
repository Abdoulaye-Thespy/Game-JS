import 'phaser';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
 
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
            gravity: { y: 0 },
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

  dom: {
        createContainer: true
    },
  plugins: {
    scene: [
      {
        key: 'rexUI',
        plugin: RexUIPlugin,
        mapping: 'rexUI'
      }
    ]
    }
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