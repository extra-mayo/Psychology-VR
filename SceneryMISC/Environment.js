/**
 * Created by Zhi Jian Zheng on 11/27/2016.
 */

//x and z as parameters, y isn't needed as the trees will be elevated at the ground level
function threeTrees(x, z) {
    this.x = x;
    this.y = 0;
    this.z = z;

    this.tree = new DAE({
        x: this.x,
        y: this.y,
        z: this.z,
        scaleX: 0.5,
        scaleY: 0.5,
        scaleZ: 0.5,
        asset: "treeModel"
    });
}

function deadPineTree(x, z, scaleY){
    this.x = random(-x/2 + 1, x/2-1);
    this.y = 0;
    this.z = random(-z/2 + 1, z/2 - 1);

    this.scaleY = scaleY;


    this.tree = new DAE({
        x: this.x,
        y: this.y,
        z: this.z,
        scaleY: scaleY,
        asset: "deadTreeLowPoly",
        rotationY: random(180)
    });



}

//2DTree object works better with height = 5!
function TwoD_Trees(x, z, height) {
    this.x = x;
    this.y = 0;
    this.z = z;

    this.width = 0.5;
    this.depth = 0.5;

    this.height = 5;
    if (height) {
        this.height = height;
    }

    this.previousPos = world.getUserPosition();

    //draw our log
    this.log = new Box({
        x: this.x,
        y: this.y,
        z: this.z,
        asset: "treeLog",
        width: this.width,
        height: this.height,
        depth: this.depth
    });
    world.add(this.log);

    //draw our leaves
    this.leaf = new Box({
        x: this.x,
        y: this.y + this.height / 2.5,
        z: this.z,

        asset: "treeLeaf",

        width: this.width * 3,
        height: this.height / 5,
        depth: this.depth * 3
    });
    world.add(this.leaf);

    this.topLeaf = new Box({
        x: this.x,
        y: this.y + this.height / 3 + 1,
        z: this.z,

        asset: "treeLeaf",

        width: 1,
        height: 0.5,
        depth: 1
    });
    world.add(this.topLeaf);

    var previousPos = world.getUserPosition();
    this.move = function() {
        var userPosition = world.getUserPosition();
        var distance = dist(userPosition.x, userPosition.z, this.log.getX(), this.log.getZ());
        if (distance <  0.3) {
            world.setUserPosition(previousPos.x, previousPos.y, previousPos.z);
        }
        else {
            previousPos = userPosition;
        }
    }

}
