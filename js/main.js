var game = new Phaser.Game(800,533,Phaser.AUTO,'gameFrame');
var _link;
var _hearts;
var cursores;
var estadoPrincipal = {
  preload:function(){//cargamos los assets
      game.load.image('bg','img/Ground.png');
      game.load.spritesheet('link_anim','img/link.png',120,130);
      game.load.image('hearts','img/hearts.png');
  },
  create:function(){//pintamos los assets
      cursores =game.input.keyboard.createCursorKeys();
      game.add.image(0,0,'bg');
      _link=game.add.sprite(game.width/2,game.height/2,'link_anim');
      _link.frame = 1;
      _link.animations.add('down',[0,1,2,3,4,5,6,7,8,9],20,true);
      _link.animations.add('left',[10,11,12,13,14,15,16,17,18,19],20,true);
      _link.animations.add('up',[20,21,22,23,24,25,26,27,28,29],20,true);
      _link.animations.add('right',[30,31,32,33,34,35,36,37,38,39],20,true);
      _link.anchor.setTo(0.5,0.5);
      _hearts=game.add.sprite(0,0,'hearts');
      _hearts.scale.setTo(0.10);
  },
  update:function(){//actualizamos los assets
      if(cursores.down.isDown){
            _link.animations.play('down');
            _link.position.y +=4;
      }
      if(cursores.down.isUp){
            _link.animations.stop('down');
      }
      if(cursores.left.isDown){
            _link.animations.play('left');
            _link.position.x -=4;
      }
       if(cursores.left.isUp){
            _link.animations.stop('left');
      }
      if(cursores.up.isDown){
            _link.animations.play('up');
            _link.position.y -=4;
      }
       if(cursores.up.isUp){
            _link.animations.stop('up');
      }
      if(cursores.right.isDown){
            _link.animations.play('right');
            _link.position.x +=4;
      }
       if(cursores.right.isUp){
            _link.animations.stop('right');
      }
  }
};
game.state.add('principal',estadoPrincipal);
game.state.start('principal');