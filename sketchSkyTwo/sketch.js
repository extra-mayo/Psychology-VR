/** Created by skyzn on 11/29/2016. ...*/

var world;
var scene;
var userInfo;
var player;


function setup(){
    noCanvas;

    world = new World('Spring');
    scene = new SpringWoods(world);

    player = new Player();
    userInfo = new UserInfo(player);
}

function draw(){
    scene.displayScene();
    player.updatePosition();
    userInfo.updateInformation();
}



// var scene;
// var userPosition;
// var treeArray =[];
// var rockArray = [];
// var butterflyArray = [];
// var appleArray = [];
//
// var hungerLevel = 3;
// var thirstLevel = 3;
// var sleepLevel = 3;
// var wishLevel = 0;
//
//
//
// var startTime;
// var pond;
//
// function setup(){
//     /**
//      * Created by skyzn on 11/29/2016.
//      */
//
//
//     noCanvas();
//     scene = new World('Spring');
//     scene.setUserPosition(0, 1, 40);
//     userPosition = scene.getUserPosition();
//
//     player = new Player();
//     userInfo = new UserInfo(player);
//
//     noiseDetail(24);
//
//     var ground = new Plane({
//         x:0, y:0, z:0,
//         width:1000, height:1000,
//         asset:'grass',
//         repeatX:300,
//         repeatY:300,
//         rotationX:-90
//     });
//     scene.add(ground);
//
//     var wish = new Plane({
//         x:-100, y:1000, z:-4000,
//         height:60, width:120,
//         asset:'wish-pic',
//         material:"fog:false",
//         fog:false
//     });
//
//     scene.add(wish);
//
//
//
//     for(var i=0; i<10; i++) {
//         treeArray.push(new voxelTree(random(-450, 450), random(-450, 450)));
//     }
//
//     for(var i=0; i<100; i++) {
//         treeArray.push(new oneTree(random(-450, 450), random(-450, 450)));
//     }
//
//     for(var i=0; i<5; i++) {
//         rockArray.push(new Rock(random(-450, 450), random(-450, 450)));
//     }
//
//
//     pond = new Pond(10, -1, 10);
//
//     bubble1 = new Bubble('bubble-hunger-object', 2, 10, 20, -3.3, -0.7, 0, 1, 10);
//     bubble2 = new Bubble('bubble-thirst-object', 2, 2, 35, 0.1, -0.2, 0.25, 0.05, 5);
//     bubble3 = new Bubble('bubble-sleep-object', -2, 4, 1, 0, 0, 0, 0.1, 0);
//     bubble4 = new Bubble('bubble-obstacle-object', -5, 2, 10, -0.5, -0.2, 0.9, 0.3, 0);
//
//
//     // object = new DAE({
//     //     asset:'pond',
//     //     x:2, y: -2, z:35,
//     //     scaleX:1,
//     //     scaleY:1,
//     //     scaleZ:1
//     // });
//     // scene.add(object);
//
//     createButterflies(10);
//     createApples();
//
//     woodland = new DAE({
//         asset:'woodland',
//         y:-0.5,
//         scaleX:2,
//         scaleZ:2
//     });
//     scene.add(woodland);
//
//     startTime = millis()/1000;
//
//
// }
//
// function draw() {
//
//     //scene.display();
//     player.updatePosition();
//     userInfo.updateInformation();
//
//     console.log("hunger", hungerLevel);
//     console.log("thirst:", thirstLevel);
//     console.log(userPosition.x, userPosition.z);
//     //console.log(pond.returnPos()[0]);
//
//     if(Math.abs(userPosition.x - pond.returnPos()[0]) < 5 && Math.abs(userPosition.z - pond.returnPos()[1]) < 5) {
//         if(thirstLevel < 3) {
//             thirstLevel += 1;
//         }
//     }
//
//
//     if (mouseIsPressed || touchIsDown) {
//         scene.moveUserForward(0.1);
//     }
//     userPosition = scene.getUserPosition();
//
//     for(var i=0; i<butterflyArray.length; i++) {
//         butterflyArray[i].fly();
//     }
//
//     for(var i=0; i<butterflyArray.length; i++) {
//         butterflyArray[i].butterflyContainer.constrainPosition(-48, 48, 0.2, 50, -48, 48);
//     }
//
//     bubble1.updateStatus();
//     bubble1.trackUser();
//     bubble2.updateStatus();
//     bubble2.trackUser();
//     bubble3.updateStatus();
//     bubble3.trackUser();
//     bubble3.updateStatus();
//
//     for (var i=0; i<treeArray.length; i++) {
//         treeArray[i].updateVis();
//     }
//
// }

