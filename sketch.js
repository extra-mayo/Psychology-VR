// variable to hold a reference to our A-Frame world
var world;
var scene;
var userInfo;
var player;

function preload() {
    sound = loadSound('images/woosh.mp3');
}



function setup() {
    // no canvas needed
    noCanvas();
    world = new World('VRScene');

    player = new Player();
    scene = new WinterForest(world);

    userInfo = new UserInfo(player);


}

function draw() {
    // if (mouseIsPressed || touchIsDown) {
    //     world.moveUserForward(0.1);
    //     world.add(singleTree);
    // }


    scene.display();
    player.updatePosition();


}


