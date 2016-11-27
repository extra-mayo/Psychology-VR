/**
 * Created by Zhi Jian Zheng on 11/26/2016.
 */
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