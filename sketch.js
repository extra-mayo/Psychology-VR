// variable to hold a reference to our A-Frame world
var world;
var scene;
var bubble;
var snow;

function preload() {
    sound = loadSound('images/woosh.mp3');
}

var singleTree;
var tree = [];
var interface;
function setup() {
    // no canvas needed
    noCanvas();

    // construct the A-Frame world
    // this function requires a reference to the ID of the 'a-scene' tag in our HTML document
    world = new World('VRScene');

    scene = new WinterForest(world);
    //
    // singleTree = new deadPineTree(3,3,0.5);
    // world.add(tree);
    //
    // tree = new DAE({
    //     asset: "waterBottle",
    //     x: 0, y: 0, z: 0,
    //     scaleX: 3, scaleY: 3, scaleZ: 3
    // });
    //
    // world.add(tree);

    var userInfo = new UserInfo();

    // world.add(interface);

    // world.setUserPosition(10, 10, 10);

    // for (var i = 0; i < 10; i++){
    //     tree.push(new deadPineTree(random(10), random(10), 0.5));
    //     world.add(tree[i].tree);
    // }

    // var deadTree = new deadPineTree(0, 0);
    // world.add(deadTree.tree);

    // snow = new Sphere({
    //     x: 0,
    //     y: 0,
    //     z: 0,
    //     scaleX: 1,
    //     scaleZ: 1,
    //     scaleY: 1,
    //     width: 1,
    //     height: 1,
    //     depth: 1,
    //     opacity: 0.9,
    //     red: 255, green: 255, blue: 255
    // });
    // world.add(snow);
    // console.log("snow tag: ", snow.tag);

    // bubble = new ObstacleBubble("chicken", 0.8, -2.9, -0.5, 0.8, -40, 0, 0);
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
    // if (mouseIsPressed || touchIsDown) {
    //     world.moveUserForward(0.1);
    //     world.add(singleTree);
    // }


    // scene.display();
    // tree.move();
    // console.log(world.getUserPosition());

    // for (var i = 0; i < )
    // bubble.move();

}
//
// function keyTyped() {
//     if (key == 'r') {
//         for (let i = 0; i < world.scene.childNodes.length; i++) {
//             if (world.scene.childNodes[i] == snow.tag) {
//                 let temp = world.scene.childNodes[i];
//                 console.log(temp.getAttribute("visible"));
//                 let tempie = temp.getAttribute("visible");
//                 if (tempie) {
//                     world.scene.childNodes[i].setAttribute("visible", "false");
//                 }
//                 else {
//                     world.scene.childNodes[i].setAttribute("visible", "true");
//
//                 }
//             }
//         }
//     }
//
// }


