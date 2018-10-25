import React from 'react'
import Phaser from 'phaser'
import io from 'socket.io-client'

let socket = io(`http://10.185.3.7:8081`) // local ip address
 //let Phaser = require('../../../node_modules/phaser/src/phaser-arcade-physics.js')
 export default class GameBeta extends React.Component{
   constructor(props){
     super(props)
     this.gameOver = props.gameOver
     this.state = {
       started: false,
       myScore: 0
     }
  }//constructor
   componentDidMount(){
     this.playGame();
   }
   playGame(){

     console.log("ComponentOnLoad")
     var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        },
        parent: 'phaser-container'
      }; //config

      var map;
      var worldLayer;
      var tileset;
      var player;
      var stars;
      var bombs;
      var platforms;
      var cursors;
      var score = 0;
      var gameOver = false;
      var scoreText;

      var game = this.game = new Phaser.Game(config);
       console.log(game);
       game.input.events.on('keydown', console.log)

       function preload ()
       {
           this.load.image('tiles', 'assets/FlatStoryTileSet.png');
           this.load.tilemapTiledJSON('map', 'assets/FlatStoryTileMap2.json')
           //--------------
           this.load.image('flatStoryBG', './assets/flatStoryBG.png');
           this.load.image('ground', 'assets/platform.png');
           this.load.image('star', 'assets/ruby.png');
           this.load.image('bomb', 'assets/bomb.png');
           this.load.spritesheet('josh', 'assets/joshua_SPRITE.png', { frameWidth: 50, frameHeight: 70 });
           //32:48


       }
       function create ()
       {

         //MULTIPLAYER EXTREME EXPERIMENTATION HERE DONT FUCK IT UP Now
        var self = this;
        this.socket = socket;
        this.otherPlayers = this.physics.add.group();
        this.socket.on('currentPlayers', function (players) {
          Object.keys(players).forEach(function (id) {
            console.log("playerID:",id);
            if (players[id].playerId === self.socket.id) {
              addPlayer(self, players[id]);
            } else {
              addOtherPlayers(self, players[id]);
            }
          });
        });
        this.socket.on('newPlayer', function (playerInfo) {
          addOtherPlayers(self, playerInfo);
        });
        this.socket.on('disconnect', function (playerId) {
          self.otherPlayers.getChildren().forEach(function (otherPlayer) {
            if (playerId === otherPlayer.playerId) {
              otherPlayer.destroy();
            }
          });
        });

        this.socket.on('playerMoved', function (playerInfo) {
          self.otherPlayers.getChildren().forEach(function (otherPlayer) {
            if (playerInfo.playerId === otherPlayer.playerId) {
              otherPlayer.setPosition(playerInfo.x, playerInfo.y);
            }
          });
        });
       //=============================================================
          // Creates a Camera that will follow the player
         this.cameras.main.setBounds(0, 0, 3500, 2100);
         this.physics.world.setBounds(0, 0, 3500, 2100);
         //  A simple background for our game
         this.add.image(1920 , 1080, 'flatStoryBG');
          //  The platforms group contains the ground and the 2 ledges we can jump on
         platforms = this.physics.add.staticGroup();
         //  Here we create the ground.
         //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
         // platforms.create(400, 568, 'ground').setScale(2).refreshBody();
         //  Now let's create some ledges
         // platforms.create(600, 400, 'ground');
         // platforms.create(50, 250, 'ground');
         // platforms.create(750, 300, 'ground');
         // New TileMap Collision TEST -------------------------------------------------------------

         map = this.make.tilemap({ key: "map" });
         // console.log(map)
         tileset = map.addTilesetImage("SimpleTutorialTileset","tiles");
         // console.log(tileset)
         worldLayer = map.createStaticLayer("Ground", tileset, 0, 0);
         // console.log(worldLayer)
         worldLayer.setCollisionByProperty({ collides: true });



         // ---------------------------------------------------------------------------------------
         // The player and its settings
        player = this.physics.add.sprite(100, 2000, 'josh');
         //  //  Player physics properties. Give the little guy a slight bounce.
         // player.setBounce(0.0);
         // player.setCollideWorldBounds(true);
         // // Attach Camera to Player
         // this.cameras.main.startFollow(player)
         // this.cameras.main.followOffset.set(0, 0); // no offset yet (might change later)
         //  Our player animations, turning, walking left and walking right.
         this.anims.create({
             key: 'left',
             frames: this.anims.generateFrameNumbers('josh', { start: 0, end: 3 }),
             frameRate: 10,
             repeat: -1
         });
          this.anims.create({
             key: 'turn',
             frames: [ { key: 'josh', frame: 4 } ],
             frameRate: 20
         });
          this.anims.create({
             key: 'right',
             frames: this.anims.generateFrameNumbers('josh', { start: 5, end: 8 }),
             frameRate: 10,
             repeat: -1
         });
          //  Input Events
         this.cursors = this.input.keyboard.createCursorKeys();
          //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
         stars = this.physics.add.group({
             key: 'star',
             repeat: 30,
             setXY: { x: 12, y: 0, stepX: 70 }
         });
          stars.children.iterate(function (child) {
              //  Give each star a slightly different bounce
             child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
          });
          bombs = this.physics.add.group();
          //  The score
         scoreText = this.add.text(16, 16).setScrollFactor(0).setFontSize(32).setColor('#ffffff')
         scoreText.setText('Score: 0');

          //  Set Collider to the TileMap We Made up top

         this.physics.add.collider(player, worldLayer);
         this.physics.add.collider(stars, worldLayer);
         this.physics.add.collider(bombs, worldLayer);


         //  Collide the player and the stars with the platforms
         // this.physics.add.collider(player, platforms);
         // this.physics.add.collider(stars, platforms);
         // this.physics.add.collider(bombs, platforms);
         //  Checks to see if the player overlaps with any of the gems, if he does call the collectStar function
         this.physics.add.overlap(player, stars, collectStar, null, this);
         this.physics.add.collider(player, bombs, hitBomb, null, this);
       }
       function update ()
       {
         // console.log("Player position: ", player.x,",", player.y)
           if(player.y >= 2100) // update this 2122 is bottom
           {
              gameOver = true;
           }

           if (gameOver)
           {
             console.log("game over man! your score was:", score)

             setTimeout(() => {

              this.game.destroy();
              this.game.canvas.remove(); // this can go here or after the game = new section
               game = new Phaser.Game(config);

               // this.game.canvas.remove()
             }, 0);
               gameOver = false;
               score = 0;
               // game.state.start = update();


             // return;
           }
           if(this.player){
             if (this.cursors.left.isDown)
             {
                 this.player.setVelocityX(-300);
                  this.player.anims.play('left', true);
             }
             else if (this.cursors.right.isDown)
             {
                 this.player.setVelocityX(300);
                  this.player.anims.play('right', true);
             }
             else
             {
                 this.player.setVelocityX(0);
                  this.player.anims.play('turn');
             }
              if (this.cursors.up.isDown && this.player.body.onFloor())
             {
                 this.player.setVelocityY(-400);
             }

             //update other player movements
             // emit player movement

             updatePlayerPosition(this,this.player);
           }




       }
       function updatePlayerPosition(game,player){

         var x = player.x;
         var y = player.y;

         if (player.oldPosition && (x !== player.oldPosition.x || y !== player.oldPosition.y)) {
           game.socket.emit('playerMovement', { x: player.x, y: player.y});
         }

         // save old position data
         player.oldPosition = {
           x: player.x,
           y: player.y,
         };
       }
       function collectStar (player, star)
       {
           star.disableBody(true, true);
            //  Add and update the score
           score += 10;
           scoreText.setText('Score: ' + score);
            if (stars.countActive(true) === 0)
           {
               //  A new batch of stars to collect
               stars.children.iterate(function (child) {
                    child.enableBody(true, child.x, 0, true, true);
                });
                let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
                let bomb = bombs.create(x, 16, 'bomb');
               bomb.setBounce(1);
               bomb.setCollideWorldBounds(true);
               bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
               bomb.allowGravity = false;
            }
       }
      function hitBomb (player, bomb)
      {
          // player.physics.pause(); broken atm.
          player.setTint(0xff0000);
          player.anims.play('turn');
          //gameOver = true;
          console.log("Oh noes ", player, " got hit! you had a score of: ", score)
          score = 0;





      }
      function addPlayer(self, playerInfo){
        console.log("addPlayer:", self," ", playerInfo)

        self.player = self.physics.add.sprite(300, 1600, 'josh');
        if (playerInfo.team === 'blue') {
          self.player.setTint(0xaaaaff);
        } else {
          self.player.setTint(0xffaaaa);
        }
        self.cameras.main.startFollow(self.player)
        self.physics.add.collider(self.player, worldLayer);
        self.physics.add.overlap(self.player, stars, collectStar, null, this);
        self.physics.add.collider(self.player, bombs, hitBomb, null, this);
        self.physics.add.collider(self.player, self.otherPlayer);
        self.player.setCollideWorldBounds(true);

      }
      function addOtherPlayers(self, playerInfo) {
        console.log("addOtherPlayer:", self," ", playerInfo)
       const otherPlayer = self.physics.add.sprite(playerInfo.x, playerInfo.y, 'josh').setOrigin(0.5, 0.5);
       otherPlayer.setCollideWorldBounds(true);
       if (playerInfo.team === 'blue') {
         otherPlayer.setTint(0xaaaaff);
       } else {
         otherPlayer.setTint(0xffaaaa);
       }
       otherPlayer.playerId = playerInfo.playerId;
       self.physics.add.collider(otherPlayer, worldLayer);
       self.physics.add.overlap(otherPlayer, stars, collectStar, null, this);
       self.physics.add.collider(otherPlayer, bombs, hitBomb, null, this);
       self.physics.add.collider(otherPlayer, self.player);
       self.otherPlayers.add(otherPlayer);
     }

   }//componentOnLoad



   componentWillUnmount(){
     this.game.destroy();
     //this.game.canvas.remove();
   }


  render(){
     return(
        <div id="phaser-container">
        </div>
      )
}//render
 }
