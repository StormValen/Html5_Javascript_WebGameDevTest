var platformer = platformer || {};

platformer.gameState = {
    preload:function(){
        this.load.tilemap('map','tilemaps/mapa.json',null,Phaser.Tilemap.TILED_JSON);
        this.load.image('super_mario','img/super_mario.png');
    },
    create:function(){
        this.map = this.game.add.tilemap('map');
        this.map.addTilesetImage('super_mario');
        this.map.createLayer('background');
    },
    update:function(){
        
    }
};