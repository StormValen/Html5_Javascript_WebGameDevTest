var shooter2D = shooter2D || {};

shooter2D.game = new Phaser.Game(256,512,Phaser.AUTO,null,this,false,false);
shooter2D.game.state.add('main',shooter2D.gameState);
shooter2D.game.state.start('main');