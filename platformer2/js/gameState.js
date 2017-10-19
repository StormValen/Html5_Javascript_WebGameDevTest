var platformer = platformer || {};

platformer.gameState = {
    preload:function(){
        this.load.tilemap('level1','tilemaps/level1.json',null,Phaser.Tilemap.TILED_JSON);
        this.load.image('walls','img/walls.png');
        this.load.image('moos','img/moos.png');
        //this.load.image('bg','img/bg_green_tile.png');
    },
    create:function(){
        this.map = this.game.add.tilemap('level1');
        this.map.addTilesetImage('walls');
        this.map.addTilesetImage('moos');
        this.map.createLayer('walls_layer');
        this.map.createLayer('moos_top');
        this.map.createLayer('moos_down');
        this.map.createLayer('moos_left');
        this.map.createLayer('moos_reight');
    },
    update:function(){
        
    }
};