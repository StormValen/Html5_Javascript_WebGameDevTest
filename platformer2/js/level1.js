var platformer = platformer || {};

platformer.level1 = {
    init:function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setGameSize(gameOptions.gameWidth/2,gameOptions.gameHeight/2); //Hacer la imagen el doble de grande.
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = gameOptions.heroGravity;
        
        this.game.world.setBounds(0,0,gameOptions.level1Width,gameOptions.level1Height);
    },
    preload:function(){
        this.load.tilemap('level1','tilemaps/level1.json',null,Phaser.Tilemap.TILED_JSON);
        this.load.image('walls','img/walls.png');
        this.load.image('moss','img/moss.png');
        this.load.image('bg','img/bg_green_tile.png');
        
        this.load.spritesheet('hero','img/hero.png',32,32);
        
        this.load.image('entry','img/spr_door_closed_0.png');
    },
    create:function(){
        this.bg = this.game.add.tileSprite(0,0,gameOptions.level1Width,gameOptions.level1Height,'bg');
        this.map = this.game.add.tilemap('level1');
        this.map.addTilesetImage('walls');
        this.map.addTilesetImage('moss');
        this.walls = this.map.createLayer('walls_layer');
        this.map.setCollisionBetween(1,11,true,'walls_layer'); //El 1 y el 11 salen del fihero json donde el 0 son vacios y los numeros casillas llenas.
        this.map.createLayer('moss_top');
        this.map.createLayer('moss_bottom');
        this.map.createLayer('moss_left');
        this.map.createLayer('moss_right');
        
        this.entry = this.game.add.sprite(65,268,'entry');
        this.entry.anchor.setTo(0.5);
        
        this.hero = this.game.add.sprite(65,100,'hero',0);
        this.hero.anchor.setTo(0.5);
        this.hero.animations.add("run",[1,2,3,4],10,true);
        this.game.physics.arcade.enable(this.hero);
        
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        /*this.entry = this.game.add.sprite(65,268,'entry');
        this.entry.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this.hero);
        this.entry.body.allowGravity = false;*/
        
        this.camera.follow(this.hero,Phaser.Camera.FOLLOW_PLATFORMER);
    },
    update:function(){
        //this.game.physics.arcade.collide(this.hero,this.entry);
        this.game.physics.arcade.collide(this.hero,this.walls);
        
        this.hero.body.velocity.x = 0;
        
        if(this.cursors.left.isDown){
            this.hero.body.velocity.x = -gameOptions.heroSpeed;
            if(!this.jumping){
                this.hero.animations.play("run");
                this.hero.scale.x = -1;   
            }
        }else if(this.cursors.right.isDown){
            this.hero.body.velocity.x = gameOptions.heroSpeed;
             if(!this.jumping){
                this.hero.animations.play("run");
                this.hero.scale.x = 1;   
            }
        }else{
             if(!this.jumping){
                this.hero.animations.stop();
                 this.hero.frame = 0;
            }
        }
        
        if(this.hero.body.onFloor()){
            this.jumping = false;
        }
        
        
        if(this.space.isDown && this.hero.body.onFloor() && this.space.downDuration(250)){
            this.hero.body.velocity.y = -gameOptions.heroJump;
            this.hero.animations.stop();
            this.hero.frame = 5;
            this.jumping = true;
        }
    }
};