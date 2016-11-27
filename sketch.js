// variable to hold a reference to our A-Frame world
var world;
var snowArray = [];
var queen, king, pawn;
var container;
var sound;

function preload(){
    sound = loadSound('images/woosh.mp3');
}

function setup() {
    // no canvas needed
    noCanvas();

    // construct the A-Frame world
    // this function requires a reference to the ID of the 'a-scene' tag in our HTML document
    world = new World('VRScene');
    // now that we have a world we can add elements to it using a series of wrapper classes
    // these classes are discussed in greater detail on the A-Frame P5 documentation site
    // http://cs.nyu.edu/~kapp/courses/cs0380fall2016/aframep5.php
    // create a plane to serve as our "ground"
    var ground = new Plane({
        x: 0, y: 0, z: 0,
        width: 25, height: 25,
        asset: 'stone',
        repeatX: 50,
        repeatY: 50,
        rotationX: -90, metalness: 0.25
    });
    // add the plane to our world
    world.add(ground);


    for (var i = 0; i < 50; i++) {
        var snow = new Snow();
        snowArray.push(snow);
        world.add(snow.box);
    }

    container = new Container3D({x:0, y:0, z:0});
    world.add(container);

    queen = new DAE({
        x: 0,
        y: 1,
        z: 0,
        asset: 'queenModel',
        scaleX:1,
        scaleY:1,
        scaleZ:1,
        red: 0, green: 0, blue: 0
    });

    queen.moveSpeed = 0.03;
    queen.move = function(){
        queen.setY(queen.getY() + queen.moveSpeed);
        if (queen.getY() > 4 || queen.getY() < 1){
            queen.moveSpeed *= -1;
        }
    };
    container.addChild(queen);


    king = new DAE({
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
    container.addChild(king);

    pawn = new Sphere({
        x: 0,
        y: 0.5,
        z: 0,
        scaleX: 0.5,
        scaleY: 0.5,
        scaleZ: 0.5,
        // asset: 'pawnModel',
        clickFunction: function(e){
            sound.play();
            var userPosition = world.getUserPosition();
            if (dist(userPosition.x, userPosition.z, e.getX(), e.getZ()) < 3) {
                e.setRadius(e.getRadius() - 0.05);

            }
        }
    });
    world.add(pawn);

    console.log(pawn);


}

function draw() {
    // if (mouseIsPressed || touchIsDown) {
    //     world.moveUserForward(0.1);
    // }
    for (var i = 0; i < snowArray.length; i++) {
        snowArray[i].move();
    }
    container.spinY(1);
    // console.log(world.getUserPosition());
    queen.move();

}

function Snow() {

    // //randomly generate x, z
    this.x = random(-13, 14);
    this.y = random(10);
    this.z = random(-13, 13);

    // console.log(this.x, this.y, this.z);

    this.width = 0.05;
    this.depth = 0.05;
    this.height = 0.05;

    this.r = 255;
    this.g = 255;
    this.b = 255;

    this.box = new Box({
        x: this.x,
        y: this.y,
        z: this.z,
        width: this.width,
        height: this.height,
        depth: this.depth,
        red: this.r, green: this.g, blue: this.b
    });

    // keep track of an offset in Perlin noise space
    this.xOffset = random(1000);
    this.zOffset = random(2000, 3000);


    // function to move our box
    this.move = function () {
        // compute how the particle should move
        // the particle should always move up by a small amount
        var yMovement = -0.01;

        // the particle should randomly move in the x & z directions
        var xMovement = map(noise(this.xOffset), 0, 1, -0.05, 0.05);
        var zMovement = map(noise(this.zOffset), 0, 1, -0.05, 0.05);

        // update our poistions in perlin noise space
        this.xOffset += 0.01;
        this.zOffset += 0.01;

        // set the position of our box (using the 'nudge' method)
        this.box.nudge(xMovement, yMovement, zMovement);

        // if we get too small we need to indicate that this box is now no longer viable
        if (this.box.y < 0) {
            this.box.y = 10;
        }
        if (this.box.z < -13 || this.box.z > 13.5) {
            this.box.z = random(-13, 13);
        }
        if (this.box.x < -13 || this.box.x > 14){
            this.box.x = random(-13, 14);
        }

    }
}

