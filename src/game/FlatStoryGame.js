import React, { Component } from 'react';
import Phaser from 'phaser';

export default class FlatStoryGame extends Component{

  componentDidMount(){
    // console.log("component mounted! executing game!")
    // var config = {
    //   type: Phaser.AUTO,
    //   width: 800,
    //   height: 600,
    //   scene:{
    //     preload: preload,
    //     create: create,
    //     update: update,
    //     render: render
    //   }
    // };
    // var game = new Phaser.Game(config);
    //
    // function preload() {
    //
    //     this.load.tilemap('level1', 'assets/starstruck/level1.json', null, Phaser.Tilemap.TILED_JSON);
    //     this.load.image('tiles-1', 'assets/starstruck/tiles-1.png');
    //     this.load.spritesheet('dude', 'assets/starstruck/dude.png', 32, 48);
    //     this.load.spritesheet('droid', 'assets/starstruck/droid.png', 32, 32);
    //     this.load.image('starSmall', 'assets/starstruck/star.png');
    //     this.load.image('starBig', 'assets/starstruck/star2.png');
    //     this.load.image('background', 'assets/starstruck/background2.png');
    //
    // }
    //
    // var map;
    // var tileset;
    // var layer;
    // var player;
    // var facing = 'left';
    // var jumpTimer = 0;
    // var cursors;
    // var jumpButton;
    // var bg;
    //
    // function create() {
    //
    //     game.physics.startSystem(Phaser.Physics.ARCADE);
    //
    //     game.stage.backgroundColor = '#000000';
    //
    //     bg = game.add.tileSprite(0, 0, 800, 600, 'background');
    //     bg.fixedToCamera = true;
    //
    //     map = game.add.tilemap('level1');
    //
    //     map.addTilesetImage('tiles-1');
    //
    //     map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
    //
    //     layer = map.createLayer('Tile Layer 1');
    //
    //     //  Un-comment this on to see the collision tiles
    //     //layer.debug = true;
    //
    //     layer.resizeWorld();
    //
    //     game.physics.arcade.gravity.y = 250;
    //
    //     player = game.add.sprite(32, 32, 'dude');
    //     game.physics.enable(player, Phaser.Physics.ARCADE);
    //
    //     player.body.bounce.y = 0.2;
    //     player.body.collideWorldBounds = true;
    //     player.body.setSize(20, 32, 5, 16);
    //
    //     player.animations.add('left', [0, 1, 2, 3], 10, true);
    //     player.animations.add('turn', [4], 20, true);
    //     player.animations.add('right', [5, 6, 7, 8], 10, true);
    //     // custom animations IMPLEMENT THESE IN A bit!
    //     /*
    //     play.animation.add('attack',[attack frames], fps, true);
    //     play.animation.add('die',[attack frames], fps, true);
    //     play.animation.add('jump',[attack frames], fps, true);
    //     */
    //
    //
    //     game.camera.follow(player);
    //
    //     cursors = game.input.keyboard.createCursorKeys();
    //     jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    //
    // }
    //
    // function update() {
    //
    //     game.physics.arcade.collide(player, layer);
    //
    //     player.body.velocity.x = 0;
    //
    //     if (cursors.left.isDown)
    //     {
    //         player.body.velocity.x = -150;
    //
    //         if (facing != 'left')
    //         {
    //             player.animations.play('left');
    //             facing = 'left';
    //         }
    //     }
    //     else if (cursors.right.isDown)
    //     {
    //         player.body.velocity.x = 150;
    //
    //         if (facing != 'right')
    //         {
    //             player.animations.play('right');
    //             facing = 'right';
    //         }
    //     }
    //     else
    //     {
    //         if (facing != 'idle')
    //         {
    //             player.animations.stop();
    //
    //             if (facing == 'left')
    //             {
    //                 player.frame = 0;
    //             }
    //             else
    //             {
    //                 player.frame = 5;
    //             }
    //
    //             facing = 'idle';
    //         }
    //     }
    //
    //     if (jumpButton.isDown && player.body.onFloor() && game.time.now > jumpTimer)
    //     {
    //         player.body.velocity.y = -250;
    //         jumpTimer = game.time.now + 750;
    //     }
    //
    // }
    // function render(){
    //
    // }
  }//componentDidMount


  render(){

    //   game.debug.text(game.time.physicsElapsed, 32, 32);
    //   game.debug.body(player);
    //   game.debug.bodyInfo(player, 16, 24);

       return (
         <div className="phaser-container"></div>
       )

  }

}
