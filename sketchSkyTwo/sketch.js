var world;
var userPosition;
var treeArray =[];
var rockArray = [];
var butterflyArray = [];
var appleArray = [];

var hungerLevel = 0;
var thirstLevel = 0;



var startTime;

function setup(){
    /**
     * Created by skyzn on 11/29/2016.
     */

    // createCanvas(500, 500);

    textSize(20);
    text("world", 20, 20, 20, 20);
    //noCanvas();
    world = new World('Spring');
    world.setUserPosition(0, 1, 40);
    userPosition = world.getUserPosition();

    noiseDetail(24);

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
        asset:'wish-pic',
        material:"fog:false"
    });
    //wish.tag.setAttribute("material", "fog:false");
    world.add(wish);

    var userInfo = new UserInfo();

    // var swarm = new butterfliesSwarm(5);

    for(var i=0; i<50; i++) {
        treeArray.push(new voxelTree(random(-50, 50), random(-50, 50)));
    }

    for(var i=0; i<10; i++) {
        treeArray.push(new oneTree(random(-50, 50), random(-50, 50)));
    }

    for(var i=0; i<5; i++) {
        rockArray.push(new Rock(random(-50, 50), random(-50, 50)));
    }


    bubble1 = new Bubble('chicken', 2, 10, 20, -3.3, -0.7, 0, 1, 10);
    bubble2 = new Bubble('bubble-thirst-object', 2, 2, 35, 0.1, -0.2, 0.25, 0.05, 5);



    // object = new DAE({
    //     asset:'bubble-thirst-object',
    //     x:2, y: 2, z:35,
    //     scaleX:1,
    //     scaleY:1,
    //     scaleZ:1
    // });
    // world.add(object);

    createButterflies(10);
    createApples();

    woodland = new DAE({
        asset:'woodland',
        y:-0.5,
        scaleX:2,
        scaleZ:2
    });
    world.add(woodland);

    startTime = millis()/1000;


}

function draw() {
    textSize(20);
    text("world", 20, 20, 20, 20);
    if (mouseIsPressed || touchIsDown) {
        world.moveUserForward(0.1);
    }
    userPosition = world.getUserPosition();
    //console.log("x:",userPosition.x, "y:", userPosition.y, "z:", userPosition.z);

    if(userPosition.x >= 50 || userPosition.x <= -50 || userPosition.z >= 50 || userPosition.z <= -50) {
        world.setUserPosition(0, 1, 40);
    }

    for(var i=0; i<butterflyArray.length; i++) {
        butterflyArray[i].fly();
    }

    for(var i=0; i<butterflyArray.length; i++) {
        butterflyArray[i].butterflyContainer.constrainPosition(-48, 48, 0.2, 50, -48, 48);
    }

    bubble1.updateStatus();
    bubble1.trackUser();
    bubble2.updateStatus();
    bubble2.trackUser();

}


