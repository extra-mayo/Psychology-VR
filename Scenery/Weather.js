/**
 * Created by Zhi Jian Zheng on 11/27/2016.
 */
function Snow(x, z) {

    // //randomly generate x, z
    this.x = random(-x/2 + 1, x/2-1);
    this.y = random(10);
    this.z = random(-z/2 + 1, z/2 - 1);

    // console.log(this.x, this.y, this.z);

    this.width = 0.05;
    this.depth = 0.05;
    this.height = 0.05;

    this.r = 255;
    this.g = 255;
    this.b = 255;

    this.snow = new Sphere({
        x: this.x,
        y: this.y,
        z: this.z,
        scaleX: 0.05,
        scaleZ: 0.05,
        scaleY: 0.05,
        width: this.width,
        height: this.height,
        depth: this.depth,
        opacity: 0.9,
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
        this.snow.nudge(xMovement, yMovement, zMovement);

        // if we get too small we need to indicate that this box is now no longer viable
        if (this.snow.y < 0) {
            this.snow.y = 10;
        }

        if (this.snow.z < -z/2 || this.snow.z > z/2) {
            this.snow.z = random(-z/2 + 1, z/2 - 1);
        }
        if (this.snow.x < -x/2 || this.snow.x > x/2){
            this.snow.x = random(-x/2 + 1, x/2 -1);
        }

    }
}

function Rain(x, y, z){
    // //randomly generate x, z
    this.x = random(-13, 14);
    this.y = random(10);
    this.z = random(-13, 13);

    this.width = 0.05;
    this.depth = 0.05;
    this.height = 0.5;

    this.r = 191;
    this.g = 191;
    this.b = 191;

    this.rain = new Box({
        x: this.x,
        y: this.y,
        z: this.z,

        width: this.width,
        height: this.height,
        depth: this.depth,

        red: this.r, green: this.g, blue: this.b,

        metalness: 0.8,

        rotationY: 10

    });

    // function to move our box
    this.move = function () {
        // compute how the particle should move
        // the particle should always move up by a small amount
        var yMovement = -0.4;

        this.rain.nudge(0, yMovement, 0);

        // if we get too small we need to indicate that this box is now no longer viable
        if (this.rain.y < 0) {
            this.rain.y = 10;
        }
        if (this.rain.z < -13 || this.rain.z > 13.5) {
            this.rain.z = random(-13, 13);
        }
        if (this.rain.x < -13 || this.rain.x > 14){
            this.rain.x = random(-13, 14);
        }

    }
}