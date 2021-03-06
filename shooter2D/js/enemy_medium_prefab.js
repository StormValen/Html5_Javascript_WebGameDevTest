var shooter2D = shooter2D || {};

shooter2D.enemy_medium_prefab = function(game,x,y){
    Phaser.Sprite.call(this,game,x,y,"enemy_medium");
    this.animations.add('stand',[0,1],10,true);
    this.anchor.setTo(0.5);
    this.scale.setTo(2);
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.animations.play('stand');
};

shooter2D.enemy_medium_prefab.prototype = Object.create(Phaser.Sprite.prototype);
shooter2D.enemy_medium_prefab.prototype.constructor = shooter2D.enemy_medium_prefab;