/**
 * Created by Zhi Jian Zheng on 11/30/2016.
 */
function ObstacleBubble(id, scaleSize, offsetX, offsetY, offsetZ, rotationX, rotationY, rotationZ){

    this.x = 0;
    this.y = 2;
    this.z = 0;


    this.container = new Container3D({
        x: this.x,
        y: this.y,
        z: this.z
    });
    world.add(this.container);

    this.bubble = new Sphere({

        x: this.x,
        y: this.y,
        z: this.z,

        opacity: 0.3,
        // metalness: 0.7,
        red: 255, green: 255, blue: 255
    });
    this.container.addChild(this.bubble);

    this.bubbleObject = new DAE({
        asset: id,
        x: this.x + offsetX,
        y: this.y + offsetY,
        z: this.z + offsetZ,

        scaleX: scaleSize,
        scaleY: scaleSize,
        scaleZ: scaleSize,

        rotationX: rotationX,
        rotationY: rotationY,
        rotationZ: rotationZ

    });
    this.container.addChild(this.bubbleObject);

    this.container.moveSpeed = -0.03;

    this.container.move = function(bubbleObject){
        this.setY(this.getY() + this.moveSpeed);
        if (this.getY() > 4 || this.getY() < 1){
            this.moveSpeed *= -1;
        }
    };

    this.move = function(){
        this.container.move();
        // this.bubbleObject.setRotation(this.bubbleObject.getRotationX(),
        //     this.bubbleObject.getRotationY() + 1,
        //     this.bubbleObject.getRotationZ());
        // this.bubbleObject.spinY(1);
    };
}

function ObstacleAnswer (){

}