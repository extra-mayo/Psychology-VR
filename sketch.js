// variable to hold a reference to our A-Frame world
var world;
var scene;
var userInfo;
var player;
var game;
var bubble;
function preload() {
    sound = loadSound('images/woosh.mp3');


}


function setup() {
    // no canvas needed
    noCanvas();

    world = new World('VRScene');
    // game = new Game();
    // game.displayMenu();
    //it'll always be 1 anyway lol


    // var bottle = new DAE({
    //     asset: "waterBottle"
    // });
    // world.add(bottle);


    // world.add(bubble.container);

    // bubble = new DAE({
    //     x: -22.25, y: 0, z: 12.78,
    //     asset: "waterBottle",
    //     scaleX: 10, scaleY: 10, scaleZ: 10
    // });
    // world.add(bubble);
    player = new Player();
    scene = new WinterForest(world);
    userInfo = new UserInfo(player);

}

function draw() {
    // if (mouseIsPressed || touchIsDown) {
    //     world.moveUserForward(0.1);
    //     world.add(singleTree);
    // }

    // if (game.gameOption == 1) {
        scene.display();
        player.updatePosition();
    // }
    // else if (game.gameOption == 2) {

    // }

}


