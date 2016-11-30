/**
 * Created by Zhi Jian Zheng on 11/26/2016.
 */
// var sound;

function ChessScene(world){
    // sound = loadSound('images/woosh.mp3');
    this.ground = new Plane({
        x: 0, y: 0, z: 0,
        width: 25, height: 25,
        asset: 'stone',
        repeatX: 50,
        repeatY: 50,
        rotationX: -90, metalness: 0.25
    });
    // add the plane to our world
    world.add(this.ground);

    this.snowArray = [];
    for (var i = 0; i < 200; i++) {
        var snow = new Snow();
        this.snowArray.push(snow);
        world.add(snow.snow);
    }

    // this.rainArray = [];
    // for (var i = 0; i < 100; i++){
    //     var rain = new Rain();
    //     this.rainArray.push(rain);
    //     world.add(rain.rain);
    // }

    this.container = new Container3D({x:0, y:0, z:0});
    // world.add(this.container);

    this.queen = new DAE({
        x: 0,
        y: 1,
        z: 0,
        asset: 'queenModel',
        scaleX:1,
        scaleY:1,
        scaleZ:1,
        red: 0, green: 0, blue: 0
    });

    this.queen.moveSpeed = 0.03;
    this.queen.move = function(queen){
        // console.log("1: ", queen.get);
        // console.log("2: ", this.queen);
        this.setY(this.getY() + this.moveSpeed);
        if (this.getY() > 4 || this.getY() < 1){
            this.moveSpeed *= -1;
        }
    };
    this.container.addChild(this.queen);

    this.king = new DAE({
        x: 5,
        y: 5,
        z: 5,
        asset: 'kingModel',
        scaleX:3,
        scaleY:3,
        scaleZ:3,
        red: 255, green: 255, blue: 255,
        rotationZ:20
    });
    this.container.addChild(this.king);
    //
    // this.pawn = new Sphere({
    //     x: 0,
    //     y: 0.5,
    //     z: 0,
    //     scaleX: 0.5,
    //     scaleY: 0.5,
    //     scaleZ: 0.5,
    //     // asset: 'pawnModel',
    //     clickFunction: function(e){
    //         // sound.play();
    //         var userPosition = world.getUserPosition();
    //         if (dist(userPosition.x, userPosition.z, e.getX(), e.getZ()) < 3) {
    //             e.setRadius(e.getRadius() - 0.05);
    //
    //         }
    //     }
    // });
    // world.add(this.pawn);


    this.move = function(){
        for (var i = 0; i < this.snowArray.length; i++) {
            this.snowArray[i].move();
        }
        this.container.spinY(1);
        // console.log(world.getUserPosition());
        this.queen.move();
    }


}