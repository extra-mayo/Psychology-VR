/**
 * Created by skyzn on 12/11/2016.
 */

function SpringWoods(world) {

    this.treeArray = [];
    this.rockArray = [];
    this.butterflyArray = [];
    this.appleArray = [];

    this.hungerLevel = 3;
    this.thirstLevel = 3;
    this.sleepLevel = 3;
    this.wishLevel = 0;

    this.startTime;


    this.width = 1000
    this.height = 1000;

    this.ground = new Plane({
        x:0, y:0, z:0,
        width:1000, height:1000,
        asset:'grass',
        repeatX:300,
        repeatY:300,
        rotationX:-90
    });
    world.add(this.ground);

    this.wish = new Plane({
        x:-100, y:1000, z:-4000,
        height:60, width:120,
        asset:'wish-pic',
    });
    world.add(this.wish);


    this.woodland = new DAE({
        asset:'woodland',
        y:-0.5,
        scaleX:2,
        scaleZ:2
    });
    world.add(woodland);
    for(var i=0; i<10; i++) {
        this.treeArray.push(new voxelTree(random(-450, 450), random(-450, 450)));
    }
    for(var i=0; i<100; i++) {
        this.treeArray.push(new oneTree(random(-450, 450), random(-450, 450)));
    }
    for(var i=0; i<5; i++) {
        this.rockArray.push(new Rock(random(-450, 450), random(-450, 450)));
    }
    this.pond = new Pond(10, -1, 10);


    this.bubble1 = new Bubble('bubble-hunger-object', 2, 10, 20, -3.3, -0.7, 0, 1, 10);
    this.bubble2 = new Bubble('bubble-thirst-object', 2, 2, 35, 0.1, -0.2, 0.25, 0.05, 5);
    this.bubble3 = new Bubble('bubble-sleep-object', -2, 4, 1, 0, 0, 0, 0.1, 0);
    this.bubble4 = new Bubble('bubble-obstacle-object', -5, 2, 10, -0.5, -0.2, 0.9, 0.3, 0);


    this.startTime = millis()/1000;



    this.displayScene = function() {

        console.log("hunger", this.hungerLevel);
        console.log("thirst:", this.thirstLevel);
        console.log(player.userPos.x, player.userPos.z);

        if (mouseIsPressed || touchIsDown) {
            world.moveUserForward(0.1);
        }


        for(var i=0; i<this.butterflyArray.length; i++) {
            this.butterflyArray[i].fly();
        }

        for(var i=0; i<this.butterflyArray.length; i++) {
            this.butterflyArray[i].butterflyContainer.constrainPosition(-48, 48, 0.2, 50, -48, 48);
        }

        this.bubble1.updateStatus();
        this.bubble1.trackUser();
        this.bubble2.updateStatus();
        this.bubble2.trackUser();
        this.bubble3.updateStatus();
        this.bubble3.trackUser();
        this.bubble3.updateStatus();

        for (var i=0; i<this.treeArray.length; i++) {
            this.treeArray[i].updateVis();
        }

        if(Math.abs(player.userPos.x - this.pond.returnPos()[0]) < 5 && Math.abs(player.userPos.z - this.pond.returnPos()[1]) < 5) {
            if(this.thirstLevel < 3) {
                this.thirstLevel += 1;
            }
        }
    }
}
