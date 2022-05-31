<script type="text/javascript">

        class Start extends Phaser.Scene {             //init de la premiere scene 
            constructor() {
                super("Start")
            }
        

            preload(){
                //load de toute les images / sprites sheet 

                this.load.image("Phaser_tuilesdejeu", "assets/tilesetproto.png");
                this.load.image("Phaser_tuilesdejeu2", "assets/FondGrotte2.png");
                this.load.image("persoP","assets/persoproto.png");
                this.load.image("blocVide", "assets/blocV.png");
                this.load.image("illu1", "assets/IlluEau.png");
                this.load.image("PhotoImage", "assets/photo.png");
                this.load.image("InvBlock3264", "assets/3264hitbox.png");
                this.load.image("particules", "assets/particletest.png");
                this.load.image("particules2", "assets/particletest2.png");
                this.load.image("SpikeImage", "assets/spike.png");
                this.load.image("SpikeImage2", "assets/spike2.png");
                this.load.image("StalagmiteImage", "assets/Stalagmite.png");
                this.load.image("EcranB", "assets/EcranB.png");
        
                this.load.tilemapTiledJSON("carte", "MapProto.json");  

                this.load.spritesheet('AnimTestP','assets/SpriteSheetPersoTest.png',
                    { frameWidth: 32, frameHeight: 32 });

                this.load.spritesheet('AnimEcran','assets/EcranSpriteSheet.png',
                    { frameWidth: 1280, frameHeight: 720 });

                this.load.spritesheet('AnimEcran2','assets/EcranSpriteSheet2.png',
                    { frameWidth: 1280, frameHeight: 720 });

                this.load.spritesheet('TransformAnim','assets/TransformationAnim.png',
                    { frameWidth: 32, frameHeight: 32 });
                    
                this.load.spritesheet('Invocation','assets/InvocationSpriteSheet.png',
                    { frameWidth: 32, frameHeight: 32 });

                this.load.spritesheet('AnimTouche','assets/letreA.png',
                    { frameWidth: 32, frameHeight: 32 });

                this.load.spritesheet('AnimPerso2','assets/spritesheetP2.png',
                    { frameWidth: 32, frameHeight: 32 });

                this.load.spritesheet('DeathPerso','assets/DeathSpriteSheet.png',
                    { frameWidth: 32, frameHeight: 32 });

            }

            create (){
                this.startgGame=true;
                this.valdash = 0;
                this.indash = false;
                this.validDash = false;
                this.compteur = 30;
                this.compteur2 = 0;
                this.verifValid = 0;
                this.FpressVerif = false;
                this.dashstart= false;
                this.dash2 = true;
                this.dashvalmax=false;
                this.compteurMax = 20;
                this.colorAppliqué=false;
                this.startFall = false;
                this.compteurF = 30;
                this.fallVerif=false;
                this.isfallin=false;
                this.injump=false;
                this.isDownM = false;
                this.mouseX = 0;
                this.mouseY = 0;
                this.Phase2Mort=false;   
                this.illucrée=false; 
                this.tempsdashS = true;
                this.inwalljumpG = false;
                this.inwalljumpD = false;
                this.compteurWallJump = 18;
                this.compteurwallstart=false;
                this.startjump=false;
                this.createR=false  ;
                this.injump2=false;
                this.inmort=false;
                this.ParticuleSpeed=10;
                this.compteurJumpReset=20;
                this.InWallGlideD=false;
                this.InWallGlideR=false;
                this.createE=false;
                this.createE2=false; 
                this.Transform2=false;
                this.AnimDebut=false,
                this.animwalkr="WalkR";
                this.Noecran=false;
                this.animwalkl="WalkL";
                this.animidle="Immobile";
                this.animjump="Jump";
                this.animfall="fall";
                this.animjumpR="Jump2L";
                this.animjumpL="Jump2R";
                this.animfallR="Fall2L";
                this.animfallL="Fall2R";
                this.InTransfo=false;
                this.Indeath=false;
                this.indeath2=false,
                this.DeathSpark=false,
                this.NoWallJumpVerif=false;
                this.illudestroy=false;
                this.checkpointsY=0;
                this.checkpointsX=0;
                this.lights.enable();
                this.lights.setAmbientColor(0x555555);
                
                const carteDuNiveau = this.add.tilemap("carte");

                // importer TileSet 
                const tileset = carteDuNiveau.addTilesetImage(
                        "tilesetproto",
                        "Phaser_tuilesdejeu"
                        );  
                        
                const tileset2 = carteDuNiveau.addTilesetImage(
                        "FondGrotte2",
                        "Phaser_tuilesdejeu2"
                        );    
                

                // importer les calques 


                const FondNiveau = carteDuNiveau.createLayer(
                        "background",
                        tileset
                        ); 

                const FondNiveau2 = carteDuNiveau.createLayer(
                        "Background2",
                        tileset
                        ); 

                const FondNiveau1 = carteDuNiveau.createLayer(
                        "Background1",
                        tileset
                        ); 
                const FondGrotte2 = carteDuNiveau.createLayer(
                        "FondGrotte2",
                        tileset2
                        ); 
    
                        
                const decorsFond2 = carteDuNiveau.createLayer(
                        "DecorsFond2",
                        tileset
                        ); 

                const decorsFond = carteDuNiveau.createLayer(
                        "DecorsFond",
                        tileset
                        ); 

                const plateformes = carteDuNiveau.createLayer(
                        "plateformeP2",
                        tileset
                        ); 
                const Decorsp = carteDuNiveau.createLayer(
                        "DecorsP",
                        tileset
                        ); 

                const FondGrotte1 = carteDuNiveau.createLayer(
                        "FondGrotte",
                        tileset2
                        ).setPipeline('Light2D');

                const plateformesG = carteDuNiveau.createLayer(
                        "plateformeGrotte",
                        tileset
                        ).setPipeline('Light2D'); 

                FondNiveau2.setScrollFactor(0.8)
                FondNiveau1.setScrollFactor(0.9)
            carteDuNiveau.getObjectLayer('spawnJoueur').objects.forEach((spawnJoueur) => {
                this.spawnXSortieScene = spawnJoueur.x, 
                this.spawnYSortieScene =  spawnJoueur.y
            });
            
                this.spark0 = this.add.particles('particules').createEmitter({
                        x: 0,
                        y: 0,
                        lifespan: 1000,
                        speed: 10,
                        quantity:150,
                        scale: { start: 0.7, end: 0 },
                    });

                this.spark2 = this.add.particles('particules').createEmitter({
                        x: 0,
                        y: 0,
                        lifespan: 1000,
                        speed: 150,
                        scale: { start: 0.7, end: 0 },
                    });

                this.spark1 = this.add.particles('particules').createEmitter({
                        x: 0,
                        y: -1000,
                        lifespan: 1000,
                        speed: 30,
                        //gravityX:50,
                        scale: { start: 0.7, end: 0 },
                        //tint: 0xFFFF00
                    });

                this. spark3 = this.add.particles('particules2').createEmitter({
                        lifespan: 150,
                        quantity:50,
                        speed: 500,
                        //gravityX:50,
                        scale: { start: 0.7, end: 1.5 },
                        //tint: 0xFFFF00
                    });

                this.spark4 = this.add.particles('particules2').createEmitter({
                        lifespan: 150,
                        quantity:50,
                        speed: 500,
                        delay:50,
                        //gravityX:50,
                        scale: { start: 0.7, end: 1.5 },
                        //tint: 0xFFFF00
                    });

                this.ImageG = this.physics.add.group({
                    allowGravity:true,
                });

                this.SpikeG = this.physics.add.group({
                    allowGravity:false,
                    immovable:true,
                });

                this.SpikeG2 = this.physics.add.group({
                    allowGravity:false,
                    immovable:true,
                });

                carteDuNiveau.getObjectLayer('Photo').objects.forEach((bloc) => {
                    this.imageB = this.ImageG.create(bloc.x, bloc.y , "PhotoImage").setOrigin(0);               //importation via calque objet feu de camp
                });
                            
                this.anims.create({
                        key: 'InvocAnim',           
                        frames: this.anims.generateFrameNumbers('Invocation', {start:0,end:17}),          //creation des animation
                        frameRate: 5,
                    }); 

                this.player = this.physics.add.sprite(this.spawnXSortieScene,this.spawnYSortieScene, 'persoP').setPipeline('Light2D');            //init joueur
                this.player.anims.play("InvocAnim",true)
                this.inmort=true;
                this.InTransfo=true;
                this.player.body.setSize(24,19,true)        
                this.player.setOffset(5, 13)
                this.player.alpha = 1; 
                this.player.setMaxVelocity(10000,900)
                this.light = this.lights.addLight(400, 300, 60).setIntensity(1);
                this.light2 = this.lights.addLight(8851, 2224, 1000).setIntensity(2);


                this.StalagmiteG = this.physics.add.group({
                    allowGravity:false,
                });

                carteDuNiveau.getObjectLayer('Stalagmite').objects.forEach((bloc) => {
                    this.StalagmiteB = this.StalagmiteG.create(bloc.x , bloc.y-32 , "StalagmiteImage").setOrigin(0).setPipeline('Light2D');               //importation via calque objet feu de camp
                    this.StalagmiteB.body.setSize(18,32,true )
                });
                
                const Decorspj = carteDuNiveau.createLayer(
                        "DecorsPJ",
                        tileset
                        ).setPipeline('Light2D'); 

                this.EcranBrouillé = this.add.sprite(this.player.x,this.player.y, 'EcranB'); 

                this.CheckPointsG=this.physics.add.group({
                        allowGravity: false,
                        immovable:true,
                    });

                carteDuNiveau.getObjectLayer('CheckPoints').objects.forEach((bloc) => {
                    this.CheckPointsB = this.CheckPointsG.create(bloc.x, bloc.y, "blocVide").setOrigin(0);               //importation via calque objet feu de camp
                    this.CheckPointsB.setSize(bloc.width,bloc.height,true )
                    this.CheckPointsB.setOffset(0,0.8)
                });
                
                this.blocG = this.physics.add.staticGroup();
                this.physics.add.collider(this.ImageG,plateformes)

                this.RefletG=this.physics.add.group({
                        allowGravity: false,
                    });


                plateformes.setCollisionByProperty({ estSolide: true }); 
                plateformesG.setCollisionByProperty({ estSolide: true }); 
                this.physics.add.collider(this.player, plateformes);
                this.physics.add.collider(this.player, plateformesG);
                this.player.setCollideWorldBounds(true);
                this.physics.add.collider(this.player,this.blocG);
                this.physics.add.collider(this.StalagmiteG,plateformesG, this.destroy,null,this);
                this.physics.add.overlap(this.player,this.SpikeG,this.Mort,null,this);
                this.physics.add.overlap(this.player,this.StalagmiteG,this.Mort,null,this);
                this.physics.add.overlap(this.player,this.SpikeG2,this.Mort,null,this);
                this.physics.add.overlap(this.player,this.CheckPointsG,this.ChekPointsF,null,this);
                carteDuNiveau.getObjectLayer('Physic').objects.forEach((bloc) => {
                        const blocsprite = this.blocG.create(bloc.x+=16 , bloc.y -= 16, "blocVide").setOrigin(0);               //importation via calque objet feu de camp
                });

                this.physics.world.setBounds(0, 0, 9376, 2560);
                this.cameras.main.setBounds(0, 0, 9376,2560);
                this.cameras.main.zoom = 2;                  //Camera
                this.cameras.main.startFollow(this.player); 

                carteDuNiveau.getObjectLayer('Pique').objects.forEach((bloc) => {
                    this.SpikeB = this.SpikeG.create(bloc.x , bloc.y-32 , "SpikeImage").setOrigin(0);               //importation via calque objet feu de camp
                });

                this.SpikeG.children.iterate((SpikeB) => {
                    SpikeB.body.setSize(22,32,true)
                    SpikeB.setOffset(0,0)
                });

                carteDuNiveau.getObjectLayer('Pique2').objects.forEach((bloc) => {
                    this.SpikeB2 = this.SpikeG2.create(bloc.x , bloc.y-32 , "SpikeImage2").setOrigin(0);               //importation via calque objet feu de camp
                });

                this.SpikeG2.children.iterate((SpikeB2) => {
                    SpikeB2.body.setSize(22,32,true)
                    SpikeB2.setOffset(11,0)
                });
                
                this.anims.create({
                        key: 'WalkL',           
                        frames: this.anims.generateFrameNumbers('AnimTestP', {start:0,end:2}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    });  

                this.anims.create({
                        key: 'AnimationTransform',           
                        frames: this.anims.generateFrameNumbers('TransformAnim', {start:0,end:11}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    });  

                this.anims.create({
                        key: 'LettreA',           
                        frames: this.anims.generateFrameNumbers('AnimTouche', {start:0,end:1}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    }); 

                this.anims.create({
                        key: 'WalkR',           
                        frames: this.anims.generateFrameNumbers('AnimTestP', {start:3,end:5}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    }); 

                this.anims.create({
                        key: 'WalkF',           
                        frames: this.anims.generateFrameNumbers('WalkAnim', {start:0,end:2}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    }); 
                    
                this.anims.create({
                        key: 'Immobile',           
                        frames: this.anims.generateFrameNumbers('AnimTestP', {start:6,end:8}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    }); 

                this.anims.create({
                        key: 'Jump',           
                        frames: this.anims.generateFrameNumbers('AnimTestP', {start:9,end:12}),          //creation des animation
                        frameRate: 10,
                    }); 

                this.anims.create({
                        key: 'fall',           
                        frames: this.anims.generateFrameNumbers('AnimTestP', {start:13,end:14}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    });

                this.anims.create({
                        key: 'fcharge',           
                        frames: this.anims.generateFrameNumbers('AnimTestP', {start:15,end:18}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    }); 

                this.anims.create({
                        key: 'dashG',           
                        frames: this.anims.generateFrameNumbers('AnimTestP', {start:19,end:20}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    }); 

                this.anims.create({
                        key: 'dashD',           
                        frames: this.anims.generateFrameNumbers('AnimTestP', {start:21,end:22}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    });

                this.anims.create({
                        key: 'WallGlideL',           
                        frames: this.anims.generateFrameNumbers('AnimTestP', {start:23,end:24}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    }); 

                this.anims.create({
                        key: 'WallGlideR',           
                        frames: this.anims.generateFrameNumbers('AnimTestP', {start:25,end:26}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    }); 

                this.anims.create({
                        key: 'Immobile2',           
                        frames: this.anims.generateFrameNumbers('AnimPerso2', {start:0,end:3}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    }); 

                this.anims.create({
                        key: 'WalkL2',           
                        frames: this.anims.generateFrameNumbers('AnimPerso2', {start:4,end:7}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    }); 

                this.anims.create({
                        key: 'WalkR2',           
                        frames: this.anims.generateFrameNumbers('AnimPerso2', {start:8,end:11}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    }); 
                    
                this.anims.create({
                        key: 'Jump2R',           
                        frames: this.anims.generateFrameNumbers('AnimPerso2', {start:12,end:16}),          //creation des animation
                        frameRate: 10,
                        repeat: -1,
                    }); 

                this.anims.create({
                        key: 'Jump2L',           
                        frames: this.anims.generateFrameNumbers('AnimPerso2', {start:19,end:23}),          //creation des animation
                        frameRate: 10,
                        repeat: -1,
                    });

                this.anims.create({
                        key: 'Fall2R',           
                        frames: this.anims.generateFrameNumbers('AnimPerso2', {start:17,end:18}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    });

                this.anims.create({
                        key: 'Fall2L',           
                        frames: this.anims.generateFrameNumbers('AnimPerso2', {start:24,end:25}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    }); 
                    
                this.anims.create({
                        key: 'WallSlideL',           
                        frames: this.anims.generateFrameNumbers('AnimPerso2', {start:26,end:27}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    }); 

                this.anims.create({
                        key: 'WallSlideR',           
                        frames: this.anims.generateFrameNumbers('AnimPerso2', {start:28,end:29}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    }); 

                this.anims.create({
                        key: 'DeathAnim',           
                        frames: this.anims.generateFrameNumbers('DeathPerso', {start:0,end:5}),          //creation des animation
                        frameRate: 15,
                    }); 

                this.anims.create({
                        key: 'AnimEcranF',           
                        frames: this.anims.generateFrameNumbers('AnimEcran', {start:0,end:1}),          //creation des animation
                        frameRate: 5,
                        repeat: -1,
                    });

                this.anims.create({
                        key: 'AnimEcranF2',           
                        frames: this.anims.generateFrameNumbers('AnimEcran2', {start:0,end:11}),          //creation des animation
                        frameRate: 10,
                        repeat: -1,
                    }); 

                // touches clavier
                this.cursors = this.input.keyboard.createCursorKeys();
                this.keys = this.input.keyboard.addKeys({
                    q:  Phaser.Input.Keyboard.KeyCodes.Q,
                    d:  Phaser.Input.Keyboard.KeyCodes.D,
                    s:  Phaser.Input.Keyboard.KeyCodes.S,
                    z:  Phaser.Input.Keyboard.KeyCodes.Z,
                    a:  Phaser.Input.Keyboard.KeyCodes.A,
                    e:  Phaser.Input.Keyboard.KeyCodes.E,               //importation de touche
                    f:  Phaser.Input.Keyboard.KeyCodes.F,
                    espace:  Phaser.Input.Keyboard.KeyCodes.SPACE
                });
                this.fdown = this.keys.f.isUp;
            }

            ChekPointsF(){
                this.checkpointsX=this.player.x
                this.checkpointsY=this.player.y
            }

            destroy(StalagmiteA){
                StalagmiteA.disableBody(true,true)
            }

            Mort(){
                console.log("inDeath")
                this.inmort=true
                if(this.Transform2==true){
                    this.InTransfo=true;
                    this.player.setVelocityX(0)
                    this.player.setVelocityY(-25);
                    this.player.anims.play("DeathAnim",true)
                    if(this.player.anims.currentFrame.index==6){
                        this.Indeath=true;
                        this.player.setVisible(false);
                        if(this.indeath2==false){
                            this.indeath2=true
                        setTimeout(() => {
                            console.log("yo")
                            this.InTransfo=false;   //if last frame
                            this.player.setVisible(true);
                            this.player.x=this.checkpointsX;   
                            this.player.y=this.checkpointsY; 
                            this.indeath2=false; 
                            this.Indeath=false;
                            this.DeathSpark=false;
                            this.inmort=false;
                            }, 500);
                        }
                    }
                }else if(this.Transform2==false){
                    this.player.setVelocityX(0)
                    this.player.setVelocityY(0);
                    this.InTransfo=true
                    this.Indeath=true;
                    this.player.setVisible(false);
                    if(this.indeath2==false){
                        this.indeath2=true
                    setTimeout(() => {
                        console.log("yo")
                        this.InTransfo=false;   //if last frame
                        this.player.setVisible(true);
                        this.player.x=this.checkpointsX;   
                        this.player.y=this.checkpointsY; 
                        this.indeath2=false; 
                        this.Indeath=false;
                        this.DeathSpark=false;
                        this.inmort=false;
                        }, 500);
                    }
                }
            }

            update(){
                if(this.AnimDebut==false){
                    setTimeout(() => {
                        this.AnimDebut=true;
                        this.inmort=false;
                        this.InTransfo=false;
                }, 6100);
                }
                if(this.createE2==false){
                    this.EcranBrouillé.anims.play("AnimEcranF",true)
                }
                this.EcranBrouillé.x=this.player.x
                this.EcranBrouillé.y=this.player.y
                this.light.x=this.player.x
                this.light.y=this.player.y
                console.log(this.player.x,this.player.y)
                this.StalagmiteG.children.each(function(StalagmiteAutre) {
                    if(this.player.y>StalagmiteAutre.y && (this.player.x >= StalagmiteAutre.x-10 && this.player.x <= StalagmiteAutre.x+10)){
                        StalagmiteAutre.setVelocityY(480)
                        }
                }, this);

                if(this.Transform2==true){
                    this.animwalkr="WalkR2";
                    this.animwalkl="WalkL2";
                    this.animidle="Immobile2";
                    this.animjumpR="Jump2L";
                    this.animjumpL="Jump2R";
                    this.animfallR="Fall2L";
                    this.animfallL="Fall2R";
                }
                this.fdown = this.keys.f.isUp;
                console.log(this.createR)
                if(this.keys.f.isDown){
                    this.spark1.setPosition(this.player.x, this.player.y);
                }else{
                    this.spark1.setPosition(0, 0);
                }

                if(this.indash==true){
                    this.spark2.setPosition(this.player.x, this.player.y);
                }else{
                    this.spark2.setPosition(0, 0);
                }

                if(this.Indeath==true && this.DeathSpark==false){
                    this. DeathSpark=true
                    this.spark3.setPosition(this.player.x, this.player.y);
                    this.cameras.main.shake(90, 0.001);
                    this.spark4.setPosition(this.player.x, this.player.y);
                }else{
                    this.spark3.setPosition(0, 0);
                    this.spark4.setPosition(0, 0);
                }

                if(((this.player.x >= this.imageB.x-50 && this.player.x <= this.imageB.x+50) && (this.player.y >=this.imageB.y-50 && this.player.y <= this.imageB.y+50) && this.createE==false)){
                    this.lettreSprite = this.add.sprite(this.player.x,this.player.y, 'LettreA');  
                    this.lettreSprite.anims.play("LettreA",true)
                    this.createE=true
                }

                if(((this.player.x <= this.imageB.x-50 || this.player.x >= this.imageB.x+50) && this.createE==true)){
                    this.lettreSprite.destroy()
                    this.createE=false       
                }

                if(this.createE==true){
                    this.lettreSprite.x=this.player.x
                    this.lettreSprite.y=this.player.y-32;
                    if(this.keys.e.isDown && this.Transform2==false && this.player.body.blocked.down ){
                        this.player.anims.play("AnimationTransform",true)
                        this.InTransfo=true;
                        this.player.setVelocityX(0)
                        setTimeout(() => {
                            this.Transform2=true; 
                            this.InTransfo=false;
                            this.player.body.setSize(20,0,true)        
                        }, 2370);

                    }
                }

                
                if(((this.player.x >= 2538 && this.player.x <= 2998) && (this.player.y == 2352))&& this.createR==false){       //pop info item quand joueur a coté
                    console.log("createR")
                    this.playerReflet = this.RefletG.create(this.player.x,this.player.y-20, 'persoP');
                    this.playerReflet.flipY=true;

                    if(this.player.direction=="gauche"){
                        this.playerReflet.anims.play(this.animwalkl, true)
                    }else{
                        this.playerReflet.anims.play(this.animidle, true)
                    }
                    if(this.player.direction=="droite"){
                        this.playerReflet.anims.play(this.animwalkr, true)
                    }else{
                        this.playerReflet.anims.play(this.animidle, true)
                    }
                    this.createR=true
                }

                if(((this.player.x >= 2538 && this.player.x <= 2998) && (this.player.y <=2350)&& this.createR==true)){
                    console.log("destroy")
                    this.playerReflet.destroy()
                    this.createR=false       
                }


                if(this.createR==true){
                    this.playerReflet.x=this.player.x
                    this.playerReflet.y=this.player.y+32;
                    this.playerReflet.alpha = 0.5;
                    if(this.player.direction=="gauche"){
                        this.playerReflet.anims.play(this.animwalkl, true)
                    }
                    else if(this.player.direction=="droite"){
                        this.playerReflet.anims.play(this.animwalkr, true)
                    }else{
                        this.playerReflet.anims.play(this.animidle, true)
                    }
                }

                if(this.player.x<=2538 && this.createR==true ||this.player.x >= 2998 && this.createR ==true){
                    this.playerReflet.destroy()
                    this.createR=false
                }

                if(this.createR == true && this.createE2==false  && this.Noecran==false){
                    this.lettreSprite2 = this.add.sprite(this.player.x,this.player.y, 'LettreA');  
                    this.lettreSprite2.anims.play("LettreA",true)
                    this.createE2=true
                }

                if(this.createR==false && this.createE2==true  && this.Noecran==false){
                    this.lettreSprite2.destroy()
                    this.createE2=false       
                }

                if(this.illucrée==true && Phaser.Input.Keyboard.JustDown(this.keys.e) ){
                    console.log("oui")
                    this.EcranBrouillé.anims.play("AnimEcranF2",true)
                    this.illudestroy=true
                }

                if(this.createE2==true && this.Noecran==false){
                    this.lettreSprite2.x=this.player.x
                    this.lettreSprite2.y=this.player.y-32;
                    if(Phaser.Input.Keyboard.JustDown(this.keys.e) ){
                        this.IlluExistence = this.add.sprite(this.player.x,this.player.y, 'illu1');
                        this.IlluExistence.alpha=0
                        this.IlluExistence.setScale(0.3)
                        this.illucrée=true
                    }
                }

                if(this.illucrée==true && this.illudestroy==false){
                    this.IlluExistence.alpha += 0.1;
                }
                if(this.illudestroy==true){
                    console.log("in")
                    this.IlluExistence.alpha -= 0.1;
                    if(this.IlluExistence.alpha<=0){
                        this.IlluExistence.destroy()
                    }
                }
                console.log(this.illucrée)
                if(this.EcranBrouillé.anims.currentFrame.index==12){

                    this.EcranBrouillé.setVisible(false)
                    this.lettreSprite2.destroy()
                    this.Noecran=true

                }


                if (this.player.body.blocked.down || this.player.body.blocked.left || this.player.body.blocked.right){
                    this.FpressVerif=false;
                    this.compteur=30;
                    this.valdash=0;
                    this.dashvalmax=false;
                    this.colorAppliqué=false;
                    this.fdown = this.keys.f.isUp;
                    this.compteurJumpReset=20
                    this.injump2=false
                }

                if (this.player.body.blocked.down){
                    this.dash2 = true;
                    this.indash = false;
                    this.fallVerif=false;
                    this.injump=false;
                    this.tempsdashS=true
                    this.injump2=false
                }

                ///glisse
                if(this.player.body.blocked.left && this.injump==false && this.Transform2==true){
                    this.player.anims.play("WallSlideR",true)
                    this.InWallGlideD=true
                    this.player.setVelocityY(10)
                }else{
                    this.InWallGlideD=false;
                }

                if(this.player.body.blocked.right && this.injump==false && this.Transform2==true ){
                    this.player.anims.play("WallSlideL",true)
                    this.InWallGlideR=true
                    this.player.setVelocityY(10)
                }else{
                    this.InWallGlideR=false
                }
                /////////////////

                if(this.dash2==true){
                if (this.keys.f.isDown && this.fallVerif==false){
                    this.player.anims.play("fcharge",true)
                    this.player.setVelocityX(0)
                    this.player.setVelocityY(-25);
                    this.FpressVerif = true;
                    this.valdash+=1
                }
                }

                if (this.valdash>=100){
                    this. valdash=100;
                    this.dashvalmax=true;
                }

                if (this.dashvalmax == true && this.colorAppliqué==false){
                    this.player.setTintFill(0xffffff);
                    this.compteurMax --
                }


                if (this.compteurMax==0){
                    this.compteurMax=20
                    this.player.setTint(0xffffff);
                    this.colorAppliqué=true;
                    this.startFall = true;
                }

                /*if (isDownM==true && tempsdashS==true){
                    this.physics.moveTo(player,mouseX,mouseY,600)
                    tempsdashS=false;
                }*/

                /*if(player.body.velocity.y>200 && player.body.blocked.down){
                    player.setVelocityY(- 600)
                }*/

                if(this.startFall == true){
                    this.compteurF--
                    if (this.compteurF==0){
                        this.fallVerif=true;
                        this.compteurF=30;
                        this.startFall=false;
                    }
                }

                if(this.player.direction=="immobile"){
                    this.ParticuleSpeed=1000
                }else{
                    this.ParticuleSpeed=10
                }

                if(this.injump==true && this.player.body.blocked.left && this.Transform2==true){
                    this.injump2=false
                    this.inwalljumpG=true
                    this.player.setVelocityX(50)
                    this.compteurwallstart=true
                }   

                if(this.injump==true && this.player.body.blocked.right && this.Transform2==true){
                    this.inwalljumpD=true
                    this.player.setVelocityX(-50)
                    this.compteurwallstart=true
                }   

                if(this.compteurwallstart == true){
                    this.compteurWallJump--
                }

                if(this.compteurWallJump==0){
                    this.inwalljumpG=false
                    this.inwalljumpD=false
                    this.compteurwallstart=false
                    this.compteurWallJump=18
                }

                if(this.indash==true){
                    this.fallVerif=false;
                    this.fdown = this.keys.f.isUp ||this.keys.f.isDown;
                }

                if (Phaser.Input.Keyboard.JustDown(this.keys.espace)){
                    if (this.player.body.blocked.down && this.InTransfo==false) {
                        this.player.setVelocityY(-600);
                        if(this.Transform2==true && this.player.direction=="gauche" &&  this.inmort==false){
                            this.player.anims.play(this.animjumpL,true)
                        }else if(this.Transform2==true && this.player.direction=="droite" && this.inmort==false){
                            this.player.anims.play(this.animjumpR,true)                  
                        }else if(this.Transform2==true && this.player.direction=="immobile" && this.inmort==false){
                            this.player.anims.play(this.animjumpL,true)         
                        }
                        if(this.Transform2==false){
                            this.player.anims.play("Jump",true)   
                        }
                        this.injump=true
                        this.injump2=true
                        this.startjump=true
                    }
                    if (this.player.body.blocked.right && this.Transform2==true) {
                        if(this.Transform2==true && this.player.direction=="gauche"){
                            this.player.anims.play(this.animjumpL,true)
                        }else if(this.Transform2==true && this.player.direction=="droite"){
                            this.player.anims.play(this.animjumpR,true)                  
                        }else if(this.Transform2==true && this.player.direction=="immobile" ){
                            this.player.anims.play(this.animjumpL,true)         
                        }
                        if(this.Transform2==false){
                            this.player.anims.play("Jump",true)   
                        }
                        this.player.setVelocityY(-600);
                        this.injump=true
                        this.injump2=true
                        this.startjump=true
                        this.player.setVelocityX(-150)
                    }
                    if (this.player.body.blocked.left && this.Transform2==true) {
                        this.player.setVelocityY(-600);
                        if(this.Transform2==true && this.player.direction=="gauche"){
                            this.player.anims.play(this.animjumpL,true)
                        }else if(this.Transform2==true && this.player.direction=="droite"){
                            this.player.anims.play(this.animjumpR,true)                  
                        }else if(this.Transform2==true && this.player.direction=="immobile"){
                            this.player.anims.play(this.animjumpL,true)         
                        }
                        if(this.Transform2==false){
                            this.player.anims.play("Jump",true)   
                        }
                        this.injump=true
                        this.injump2=true
                        this.player.setVelocityX(150)
                        this.startjump=true
                    }
                }  
                
                if(this.startjump==true){
                    this.compteurJumpReset--
                }


                if(this.compteurJumpReset==0){
                    this.startjump=false;
                    this.compteurJumpReset=20
                    this.injump=false
                }

                
                if(this.fdown && this.FpressVerif == true && this.fallVerif==false){
                    this.cameras.main.shake(50, 0.001);
                    this.compteur--
                    this.indash = true;
                    this.dash2 = false;
                    if (this.player.direction=="gauche"){
                        this.player.anims.play("dashG",true)
                        this.player.setVelocityX(-(this.valdash*10))
                        this.player.setVelocityY(-25);
                    }
                    if (this.player.direction=="droite"){
                        this.player.anims.play("dashD",true)
                        this.player.setVelocityX(this.valdash*10);
                        this.player.setVelocityY(-25);
                    }
                    if (this.compteur==0 ){
                        this.FpressVerif=false;
                        this.compteur=30;
                        this.valdash=0;
                        this.dashvalmax=false;
                        this.colorAppliqué=false;
                        this.fdown = this.keys.f.isUp;
                    }
                } 
                
                if(this.player.body.velocity.y>0 ){
                    this.isfallin = true
                    this.indash=false
                    if(this.InWallGlideR==false & this.InWallGlideD==false){
                        if(this.Transform2==true && this.player.direction=="gauche" && this.inmort==false ){
                            this.player.anims.play(this.animfallL,true)
                        }else if(this.Transform2==true && this.player.direction=="droite"  && this.inmort==false ){
                            this.player.anims.play(this.animfallR,true)             
                        }else if(this.Transform2==true && this.player.direction=="immobile"  && this.inmort==false ){
                            this.player.anims.play(this.animfallL,true)         
                        }
                        if(this.Transform2==false  && this.inmort==false ){
                            this.player.anims.play("fall",true)                           
                        }
                    }
                }else{
                    this.isfallin = false
                }

                if(this.player.body.velocity.y>0){
                    this.indash=false
                }

                if (this.keys.q.isDown && this.InTransfo==false){ 
                    if (this.FpressVerif==false && this.inwalljumpG==false){
                        this.player.setVelocityX(-200); 
                    }
                    if (this.indash==false){
                        this. player.direction="gauche"
                        if(this.isfallin == false && this.injump2==false && this.FpressVerif==false  && this.inmort==false ){
                            this.player.anims.play(this.animwalkl, true)}
                    }
                }

                else if (this.keys.d.isDown && this.InTransfo==false){ 
                    if (this.FpressVerif==false && this.inwalljumpD==false ){
                        this.player.setVelocityX(200); 
                    }
                    if (this.indash==false){
                        this.player.direction="droite"
                        if(this.isfallin == false && this.injump2==false && this.FpressVerif==false  && this.inmort==false ){
                            this.player.anims.play(this.animwalkr, true)}
                    } 
                }

                if (this.keys.q.isUp && this.keys.d.isUp && this.FpressVerif==false && this.isDownM==false){
                    this.player.setVelocityX(0); 
                    this.player.direction="immobile"
                    if(this.isfallin == false && this.injump2==false && this.injump==false && this.InTransfo==false  && this.inmort==false ){
                        this.player.anims.play(this.animidle, true)
                    }
                } 

            }
        }
       
        var config = {
            type: Phaser.AUTO,
            scale: {
            mode: Phaser.Scale.FIT,
            parent: 'phaser-example',
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 1280,
            height: 720,
            pixelArt: true,
            },
            physics: {
            default: 'arcade',
            arcade: {
            gravity: { y: 1500},
            debug: false,
            }},
            fps: {
            target: 90,                    //bloc fps car update frame rate est selon frame rate du pc et donc changement des timings ( vitesse deplacement/tombe etc...)
            forceSetTimeOut: true
            },
            pixelArt: true,
            scene: [Start]
            };

        new Phaser.Game(config);

</script>