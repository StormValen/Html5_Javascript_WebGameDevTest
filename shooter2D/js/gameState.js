var shooter2D = shooter2D || {};
var cursores;
shooter2D.gameState = {
preload:function(){
    cursores = shooter2D.game.input.keyboard.createCursorKeys();
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.game.stage.backgroundColor='#190c4e'
    //BACKGROUND
    this.game.load.image('background_back','img/background_back.png');
    this.game.load.image('background_frontal','img/background_frontal.png');
    //SHIP
    this.game.load.spritesheet('ship','img/str_player.png',16,24);
},
create:function(){
    //BACKGROUND
    this.background_back = this.game.add.tileSprite(0,0,256,512,'background_back');
    this.background_frontal = this.game.add.tileSprite(0,0,256,512,'background_frontal');
    //SHIP
    this.nave = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'ship');
    this.nave.anchor.setTo(0.5);
    this.nave.scale.setTo(2);
    
    this.nave.animations.add('stand',[0,1],10,true);
    this.nave.animations.add('right',[2,3],10,true);
    this.nave.animations.add('left',[4,5],10,true);
    
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    
    this.game.physics.arcade.enable(this.nave);
    this.nave.body.collideWorldBounds = true;
    this.loadBullets();
    this.shootingTimer = this.game.time.events.loop(Phaser.Timer.SECOND/2,this.createBullet,this);
},
update:function(){
    //BACKGROUND
    this.background_back.tilePosition.y += .25;
    this.background_frontal.tilePosition.y += 1;
    
    
    if(cursores.right.isDown){
        this.nave.animations.play('right');
        this.nave.body.velocity.x +=2.2;
    }
    if(cursores.left.isDown){
        this.nave.animations.play('left');
        this.nave.body.velocity.x -=2.2;
    }
     if(cursores.left.isUp && cursores.right.isUp){
        this.nave.animations.play('stand');
    }
    
    if(cursores.down.isDown){
        this.nave.body.velocity.y +=2.2;
    }
    if(cursores.up.isDown){
       this.nave.body.velocity.y -=2.2;
    }
},
loadBullets:function(){
    this.bullets = this.add.group();
    this.bullets.enableBody = true;
},
createBullet:function(){
    var bullet = this.bullets.getFirstExists(false);
    if(!bullet){
        console.log('crear la bala');
    }else{
        //reset
    }
    //give bullet velocity
}
};