var shooter2D = shooter2D || {};

shooter2D.bulletPrefab = function(game,x,y){
    Phaser.Sprite.call(this,game,x,y,"bullet");
    this.anchor.setTo(0.5);
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
};

shooter2D.bulletPrefab.prototype = Object.create(Phaser.Sprite.prototype);
shooter2D.bulletPrefab.prototype.constructor = shooter2D.bulletPrefab;