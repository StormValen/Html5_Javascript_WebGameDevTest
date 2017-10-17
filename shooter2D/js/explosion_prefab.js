var shooter2D = shooter2D || {};

shooter2D.explosion_prefab = function(game,x,y){
    Phaser.Sprite.call(this,game,x,y,"explosion");
    this.animations.add('stand',[0,1,2,3,4],10,false);
    this.anchor.setTo(0.5);
    this.scale.setTo(2);
    this.checkWorldBounds = true;
    this.animations.play('stand');
};

shooter2D.explosion_prefab.prototype = Object.create(Phaser.Sprite.prototype);
shooter2D.explosion_prefab.prototype.constructor = shooter2D.explosion_prefab;