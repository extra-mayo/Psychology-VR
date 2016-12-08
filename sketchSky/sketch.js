var world;
var userPosition;
var treeArray =[];
var rockArray = [];
var butterflyArray = [];

function setup(){
    /**
     * Created by skyzn on 11/29/2016.
     */

    noCanvas();
    world = new World('VRScene');
    world.setUserPosition(40, 1, 40);
    userPosition = world.getUserPosition();

    var ground = new Plane({
        x:0, y:0, z:0,
        width:200, height:200,
        asset:'grass',
        repeatX:70,
        repeatY:70,
        rotationX:-90
    });
    world.add(ground);

    var wish = new Plane({
        x:-500, y:1000, z:-4000,
        height:600, width:1200,
        asset:'wish-pic'
    });
    world.add(wish);


    for(var i=0; i<50; i++) {
        treeArray.push(new voxelTree(random(-50, 50), random(-50, 50)));
    }

    for(var i=0; i<10; i++) {
        treeArray.push(new oneTree(random(-50, 50), random(-50, 50)));
    }

    for(var i=0; i<5; i++) {
        rockArray.push(new Rock(random(-50, 50), random(-50, 50)));
    }

    createButterflies(10);
    console.log(butterflyArray.length);

    woodland = new DAE({
        asset:'woodland',
        y:-0.5,
        scaleX:2,
        scaleZ:2
    });
    world.add(woodland);



}

function draw() {
    if (mouseIsPressed || touchIsDown) {
        world.moveUserForward(0.1);
    }
    userPosition = world.getUserPosition();
    //console.log("x:",userPosition.x, "y:", userPosition.y, "z:", userPosition.z);

    if(userPosition.x >= 50 || userPosition.x <= -50 || userPosition.z >= 50 || userPosition.z <= -50) {
        world.setUserPosition(-50, 1, -50);
    }

    for(var i=0; i<butterflyArray.length; i++) {
        butterflyArray[i].fly();
    }
}

function oneTree(x,z){
    this.model = new DAE({
        asset:'singleTree',
        x:x,
        y:0,
        z:z,
        scaleX:4,
        scaleY:4,
        scaleZ:4
    });
    world.add(this.model);
}

function voxelTree(x,z){
    this.model = new OBJ({
        asset:'voxelTree-obj',
        mtl:'voxelTree-mtl',
        x:x,
        y:0,
        z:z,
        scaleX:0.1,
        scaleY:0.1,
        scaleZ:0.1
    });
    world.add(this.model);
}

function Rock(x,z){
    this.model = new OBJ({
        asset:'rock-obj',
        mtl:'rock-mtl',
        x:x,
        y:0,
        z:z,
        scaleX:0.1,
        scaleY:0.1,
        scaleZ:0.1
    });
    world.add(this.model);
}

// function Butterfly(x, y, z){
//     this.flyCounter = 0;
//     this.wingDir = 1;
//     this.xNoiseOffset = random(0, 1000);
//     this.yNoiseOffset = random(1000, 2000);
//     this.zNoiseOffset = random(2000, 3000);
//
//     this.butterflyContainer = new Container3D({
//         x:x, y:y, z:z,
//         visible:true
//     });
//     world.add(this.butterflyContainer);
//
//     this.leftWingContainer = new Container3D({
//         x:0, y:0, z:-0.035,
//         rotationY:-20
//     });
//     this.butterflyContainer.addChild(this.leftWingContainer);
//
//     this.leftWingTop = new Cylinder({
//         asset:'butterfly-tex',
//         side:'double',
//         radius:0.025,
//         height:0.005,
//         x:0.013, y:0, z:0
//     });
//     this.leftWingBottom = new Cylinder({
//         asset:'butterfly-tex',
//         side:'double',
//         radius:0.04,
//         height:0.005,
//         x:-0.04, y:0, z:0
//     });
//     this.leftWingContainer.addChild(this.leftWingTop);
//     this.leftWingContainer.addChild(this.leftWingBottom);
//
//     this.rightWingContainer = new Container3D({
//         x:0, y:0, z:0.035,
//         rotationY:20
//     });
//     this.butterflyContainer.addChild(this.rightWingContainer);
//
//     this.rightWingTop = new Cylinder({
//         asset:'butterfly-tex',
//         side:'double',
//         radius:0.025,
//         height:0.005,
//         x:0.013, y:0, z:0
//     });
//     this.rightWingBottom = new Cylinder({
//         asset:'butterfly-tex',
//         side:'double',
//         radius:0.04,
//         height:0.005,
//         x:-0.04, y:0, z:0
//     });
//     this.rightWingContainer.addChild(this.rightWingTop);
//     this.rightWingContainer.addChild(this.rightWingBottom);
//
//     this.middle = new Cylinder({
//         asset:'butterfly-tex',
//         height:0.06,
//         radius:0.005,
//         x:-0.01, y:0, z:0,
//         rotationZ:90
//
//     });
//     this.butterflyContainer.addChild(this.middle);
//
//     this.fly = function(){
//
//         var xMovement = map(noise(this.xNoiseOffset), 0, 1, -0.1, 0.1);
//         var yMovement = map(noise(this.yNoiseOffset), 0, 1, -0.1, 0.1);
//         var zMovement = map(noise(this.zNoiseOffset), 0, 1, -0.1, 0.1);
//
//         if(this.butterflyContainer.y < 0 || this.butterflyContainer.y > 95 || this.butterflyContainer.x < -50 || this.butterflyContainer.x > 50 || this.butterflyContainer.z < -50 || this.butterflyContainer.z > 50){
//             this.xNoiseOffset += 100;
//             this.yNoiseOffset += 100;
//             this.zNoiseOffset += 100;
//
//             var xMovement = map(noise(this.xNoiseOffset), 0, 1, -0.1, 0.1);
//             var yMovement = map(noise(this.yNoiseOffset), 0, 1, -0.1, 0.1);
//             var zMovement = map(noise(this.zNoiseOffset), 0, 1, -0.1, 0.1);
//
//             this.butterflyContainer.nudge(xMovement, yMovement, zMovement);
//         }
//
//         this.butterflyContainer.nudge(xMovement, yMovement, zMovement);
//
//         this.xNoiseOffset += 0.01;
//         this.yNoiseOffset += 0.01;
//         this.zNoiseOffset += 0.01;
//
//
//         if(this.flyCounter!= 10) {
//             if(this.wingDir == 1) {
//                 this.leftWingContainer.spinX(5);
//                 this.rightWingContainer.spinX(-5);
//                 this.flyCounter += 1;
//             }
//             else if(this.wingDir == -1) {
//                 this.leftWingContainer.spinX(-5);
//                 this.rightWingContainer.spinX(5);
//                 this.flyCounter += 1;
//             }
//         }
//         else{
//             this.flyCounter = 0;
//             this.wingDir *= -1;
//         }
//     }
// }
//
//
// function createButterflies(num) {
//     ranX = random(userPosition.x-10, userPosition.x+10);
//     ranY = random(userPosition.y, userPosition.y+5);
//     ranZ = random(userPosition.z-10, userPosition.z+10);
//
//     for(var i=0; i<num; i++) {
//         var butterfly = new Butterfly(ranX,ranY,ranZ);
//         butterflyArray.push(butterfly);
//     }
// }
//
// // function butterfliesSwarm(num) {
// //     ranX = random(userPosition.x-10, userPosition.x+10);
// //     ranY = random(userPosition.y, userPosition.y+5);
// //     ranZ = random(userPosition.z-10, userPosition.z+10);
// //
// //     this.swarm = new Container3D({
// //         x:ranX, y:ranY, z:ranZ
// //     });
// //     world.add(this.swarm);
// //
// //     this.butter = new Butterfly({
// //         x:ranX,y:ranY,z:ranZ});
// //     this.swarm.addChild(this.butter);
// //     console.log("added butter");
// //
// //     // for(var i=0; i<num; i++) {
// //     //     butterfly = new Butterfly(ranX,ranY,ranZ);
// //     //     butterflyArray.push(butterfly);
// //     //     this.swarm.addChild(butterfly);
// //     // }
// //
// //
// // }