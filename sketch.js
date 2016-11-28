// variable to hold a reference to our A-Frame world
var world;
var scene;

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

    scene = new ChessScene(world);
    //
    // var tree = new DAE({
    //    asset: "deadTreeModel"
    // });
    // world.add(tree);

    tree = new DAE({
        asset: "testTree"
    })
    world.add(tree);

}

function draw() {
    if (mouseIsPressed || touchIsDown) {
        world.moveUserForward(0.1);
    }
    scene.move();
    // tree.move();

}



