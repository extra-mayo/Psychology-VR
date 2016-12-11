// variable to hold a reference to our A-Frame world
var world;
var scene;

function preload() {
    sound = loadSound('images/woosh.mp3');
}

var userInfo;
var player;

function setup() {
    // no canvas needed
    noCanvas();
    world = new World('VRScene');

    scene = new WinterForest(world);
    player = new Player();
    userInfo = new UserInfo(player);


}

function draw() {
    // if (mouseIsPressed || touchIsDown) {
    //     world.moveUserForward(0.1);
    //     world.add(singleTree);
    // }


    scene.display();
    player.updatePosition();
    userInfo.updateInformation();

}


