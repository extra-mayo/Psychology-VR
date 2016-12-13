// variable to hold a reference to our A-Frame world
var world;
var scene;
var userInfo;
var player;
var game;
var bubble;
var sound;
var menuDOM;
var screenDOM;

var menu;

function preload() {
    sound = loadSound('images/winter.mp3');


}


function setup() {
    // no canvas needed
    noCanvas();

    world = new World('VRScene');
    // game = new Game();
    // game.displayMenu();
    //it'll always be 1 anyway lol

    player = new Player();
    scene = new WinterForest(world, sound);
    userInfo = new UserInfo(player);

}

function draw() {

    // if (mouseIsPressed || touchIsDown) {
    //     world.moveUserForward(0.1);
    //     world.add(singleTree);
    // }


    // if (game.gameOption == 1) {
    //     menuDOM.setAttribute("visible", "false");
    //     screenDOM.setAttribute("visible", "true");
        scene.display();
        player.updatePosition();
    //
    // }
    // else if (game.gameOption == 2) {

    // }

}

function keyPressed() {
    if (keyCode === 75) {
        // console.log(scene.currentGoalLevel);
        scene.currentGoalLevel++;
        player.wish = scene.currentGoalLevel;
        console.log(player.wish);
        userInfo.increaseWishCount(player.wish);
    }
}