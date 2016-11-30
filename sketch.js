// variable to hold a reference to our A-Frame world
var world;
var scene;
var bubble;

function preload(){
    sound = loadSound('images/woosh.mp3');
}
var tree;
function setup() {
    // no canvas needed
    noCanvas();

    // construct the A-Frame world
    // this function requires a reference to the ID of the 'a-scene' tag in our HTML document
    world = new World('VRScene');

    // scene = new ChessScene(world);
    //
    // var tree = new DAE({
    //    asset: "deadTreeModel"
    // });
    // world.add(tree);

    // tree = new DAE({
    //     asset: "testTree"
    // })
    // var tree = new TwoD_Trees(0, 0, 5);
    // world.add(tree);

    // world.setUserPosition(10, 10, 10);

    bubble = new ObstacleBubble("chicken", 0.8, -2.9, -0.5, 0.8, -40, 0, 0);
    // world.add(bubble.bubble);
    // world.add(bubble.bubbleObject);
    // var sandwich = new DAE({
    //     asset: "sandwich",
    //     x: 5,
    //     y: 0,
    //     z: 0,
    //
    //     scaleX: 0.5,
    //     scaleY: 0.5,
    //     scaleZ: 0.5
    // });
    // world.add(sandwich);

}

function draw() {
    if (mouseIsPressed || touchIsDown) {
        world.moveUserForward(0.1);
    }
    // scene.move();
    // tree.move();
    bubble.move();

}



