var platformer = platformer || {};

var gameOptions = {
    gameWidth:40*32,
    gameHeight:25*32,
    bgColor:0x444444,
    playerSpeed:20,
    playerJump:40,
    playerDoubleJump:30
};

platformer.game = new Phaser.Game(gameOptions.gameWidth,gameOptions.gameHeight,Phaser.AUTO,null,this,false,false);
platformer.game.state.add('main',platformer.gameState);
platformer.game.state.start('main');