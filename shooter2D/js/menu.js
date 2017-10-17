var shooter2D = shooter2D || {};

shooter2D.menu = {
    preload:function(){
        this.game.load.image('background_back','img/background_back.png');
        this.game.load.image('background_frontal','img/background_frontal.png');
        this.game.load.image('boton','img/btn.png');
    },
    create:function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        
        this.background_back = this.game.add.tileSprite(0,0,256,512,'background_back');
        this.background_frontal = this.game.add.tileSprite(0,0,256,512,'background_frontal');
        this.boton = this.game.add.button(this.game.world.centerX,this.game.world.centerY,'boton',this.iniciaJuego,this);
        this.boton.anchor.setTo(.5);
        this.boton.scale.setTo(.5);
        
        this.titulo = this.game.add.text(this.game.world.centerX,this.game.world.centerY-100,'Shooter2D');
        this.titulo.font = 'Arial Black';
        this.titulo.fill = '#43d637';
        this.titulo.stroke = '#ffffff';
        this.titulo.strokeThickness = 5;
        this.titulo.anchor.setTo(0.5);
    },
    update:function(){
        this.background_back.tilePosition.y += .25;
        this.background_frontal.tilePosition.y += 1;
    },
    iniciaJuego:function(){
        this.state.start('main');
    }
};