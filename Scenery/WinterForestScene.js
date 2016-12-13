/**
 * Created by Zhi Jian Zheng on 11/26/2016.
 */
// let sound;

function WinterForest(world, sound) {
    // this.sound = loadSound('images/winter.mp3');
    // this.sound.play();

    this.sound = sound;
    this.sound.play();

    this.width = 100;
    this.height = 100;

    this.objectBubbleHit = false;
    this.running = "nothing";
    //BUBBLE ARRAY! For now, lets just do the goal bubble.
    // this.goalBubble = new Bubble('chicken', 0, 0, 0, 0, 0, 0, 1, 10);

    this.goalBubble = 0;
    this.goalObject = 0;
    // this.goalBubbleArray = [];
    // for (var i = 0; i < 3; i++) {
    //     var bubble = new Bubble('weights', 'goal', 0, 1, 0, -11, -0.2, 7, 10, 1);
    //     this.goalBubbleArray.push(bubble);
    // }
    this.goalAdded = false;
    this.goalObjectAdded = false;
    this.currentGoalLevel = player.wish;


    // this.goalObjectArray = [];
    // for (var i = 0; i < 3; i++) {
    //     this.goalObjectArray.push(new GoalObject(this.width, this.height));
    // }
    this.hungerObjectArray = [];
    this.hungerBubble = 0;
    this.hungerObject = 0;
    this.hungerBubbleAdded = false;
    this.hungerObjectAdded = false;
    this.currentHungerLevel = player.hunger;

    this.thirstObjectArray = [];
    this.thirstBubble = 0;
    this.thirstBubbleObject = 0;
    this.thirstBubbleAdded = false;
    this.thirstObjectAdded = false;
    this.currentThirstLevel = player.thirst;


    this.ground = new Plane({
        x: 0, y: 0, z: 0,
        width: this.width, height: this.height,
        asset: 'snow',
        repeatX: 1,
        repeatY: 1,
        rotationX: -90, metalness: 0.25
    });
    // add the plane to our world
    world.add(this.ground);

    this.snow = new MEMSnow(10000, 10000);

    let snowman = new OBJ({
        asset: 'snowmanObj',
        mtl: 'snowmanMtl',
        x: 0,
        y: 0,
        z: 0,
        // rotationX:180,
        scaleX: 0.2,
        scaleY: 0.2,
        scaleZ: 0.2,
    });
    // world.add(snowman);

    this.deadPineTreeArray = [];
    for (let x = 0; x < 150; x++) {
        let pineTree = new deadPineTree(this.width, this.height, 0.5);
        this.deadPineTreeArray.push(pineTree);
        world.add(pineTree.tree);
    }
    this.portal = new Portal(this.width, this.height);
    this.portalAdded = false;

    this.resetThirst = function(){
        for (var i = 0; i < this.thirstObjectArray.length; i++){
            console.log("did we get here? pls.");
            console.log(this.thirstObjectArray[i].thirst.tag);
            if (world.scene.contains(this.thirstObjectArray[i].thirst.tag)){
                console.log("removed the remaining", i);
                world.remove(this.thirstObjectArray[i].thirst);
            }
        }
        this.running = "nothing";
        this.objectBubbleHit = false;


        this.currentHungerLevel = 0;
        player.hunger = this.currentHungerLevel;
        this.hungerBubbleAdded = false;
        this.hungerObjectAdded = false;

        this.thirstObjectArray = [];
        this.currentThirstLevel = 0;
        player.thirst = this.currentThirstLevel;
        this.thirstBubbleAdded = false;
        this.thirstObjectAdded = false;

        this.goalAdded = false;
        this.goalObjectAdded = false;
    };


    this.resetHunger = function(){

        // userInfo.resetHungerCount();
        for (var i = 0; i < this.hungerObjectArray.length; i++){
            console.log("did we get here? pls.");
            console.log(this.hungerObjectArray[i].hunger.tag);
            if (world.scene.contains(this.hungerObjectArray[i].hunger.tag)){
                console.log("removed the remaining", i);
                world.remove(this.hungerObjectArray[i].hunger);
            }
        }
        this.running = "nothing";
        this.objectBubbleHit = false;

        this.hungerObjectArray = [];
        this.currentHungerLevel = 0;
        player.hunger = this.currentHungerLevel;
        this.hungerBubbleAdded = false;
        this.hungerObjectAdded = false;

        this.currentThirstLevel = 0;
        player.thirst = this.currentThirstLevel;
        this.thirstBubbleAdded = false;
        this.thirstObjectAdded = false;

        this.goalAdded = false;
        this.goalObjectAdded = false;
    };

    this.deleteOtherBubbles = function(){

        world.remove(this.hungerBubble.container);
        world.remove(this.goalBubble.container);
        world.remove(this.thirstBubble.container);

    };

    this.updateGoalStuff = function () {
        if (this.objectBubbleHit == false) {
            if (this.currentGoalLevel < 3) {
                if (this.goalAdded == false) {
                    this.goalBubble = new Bubble('weights', 'goal', 0, 1, 0, -11, -0.2, 7, 10, 1);
                    world.add(this.goalBubble.container);
                    console.log("added goal bubble", this.goalBubble.container.tag);
                    this.goalAdded = true;
                }

                /*
                PLAYER HITS THE OBJECT BUBBLE! VVVVV so ObjectBubbleHit = true.
                 */

                if (this.goalAdded && this.goalBubble.updateStatus() == 1) {
                    this.objectBubbleHit = true;

                    //delete all the bubbles on map
                    this.deleteOtherBubbles();

                    //create new goal object
                    this.goalObject = new GoalObject(this.width, this.height);
                    console.log("added goal");

                    //now we're running the Goal object
                    this.running = "goal";

                    //add the goal object to the world
                    world.add(this.goalObject.goal);

                    //set object added to true
                    this.goalObjectAdded = true;
                }
            }
        }


        //if we're running Goal object
        else if (this.running == "goal"){
            // console.log("GOALIE GOALIE");
            if (this.currentGoalLevel < 3){
                //and we haven't satisfied all of the goal thingies in UI
                //if user has touched the goal object, remove it
                //increase goal level
                //set player's wish to current goal level
                //increase 1 wish image
                //set goalAdded to false, goalObjectAdded to false
                if (this.goalAdded && this.goalObjectAdded && this.goalObject.checkGoalHit() == 1) {
                    world.remove(this.goalObject.goal);
                    this.currentGoalLevel++;
                    player.wish = this.currentGoalLevel;

                    userInfo.increaseWishCount(player.wish);

                    this.goalAdded = false;
                    this.goalObjectAdded = false;

                    this.hungerBubbleAdded = false;
                    this.hungerObjectAdded = false;

                    this.thirstBubbleAdded = false;
                    this.thirstObjectAdded = false;


                    this.objectBubbleHit = false;
                }
            }
        }
    };

    this.updateHungerStuff = function(){

        //if no object bubbles have been hit...
        if (this.objectBubbleHit == false) {
            if (this.currentHungerLevel < 3 && this.currentGoalLevel < 3) {
                //and if we haven't added any hunger bubbles yet
                if (this.hungerBubbleAdded == false) {
                    //add it!
                    this.hungerBubble = new Bubble('chicken', 'goal', 0, 1, 0, -4, 0, 1, 1, 1);
                    world.add(this.hungerBubble.container);
                    console.log("added hunger bubble");
                    this.hungerBubbleAdded = true;
                }

                //if we have added a hunger bubble and user hits it...
                //remove all of the hearts in UI
                //set objectBubbleHit to true
                if (this.hungerBubbleAdded && this.hungerBubble.updateStatus() == 1) {
                    this.running = "hunger";

                    userInfo.removeHungerHearts();

                    this.objectBubbleHit = true;

                    this.deleteOtherBubbles();
                    console.log("added hunger");

                    for (var i = 0; i < 5; i++){
                        this.hungerObjectArray.push(new HungerObject(this.width, this.height));
                        world.add(this.hungerObjectArray[i].hunger);
                    }
                    this.hungerObjectAdded = true;
                }
            }
        }


        //if hunger is running...
        else if (this.running == "hunger"){
            //and we haven't hit all 3 yet...
            if (this.currentHungerLevel < 3){
                //check to see if each object has been hit.
                //if yes, remove it from world, increment count.
                for (var i = 0; i < this.hungerObjectArray.length; i++){
                    var hungerObject = this.hungerObjectArray[i];
                    if (this.hungerBubbleAdded && this.hungerObjectAdded && hungerObject.checkHungerHit() == 1 && !hungerObject.removed) {
                        console.log("removed hunger object", i);
                        world.remove(this.hungerObjectArray[i].hunger);
                        this.hungerObjectArray[i].removed = true;
                        this.currentHungerLevel++;
                        player.hunger = this.currentHungerLevel;
                        console.log("player hunger:" ,this.currentHungerLevel);
                        userInfo.increaseHungerCount(player.hunger);
                    }

                }
            }

            //IF hunger level is 3... return running to nothing, and objectBubbleHit to false.
            //also delete all the bananas on field
            else {
                this.resetHunger();
                console.log("DONE WITH HUNGER!");
            }
        }
    };



    this.updateThirstStuff = function(){

        //if no object bubbles have been hit...
        if (this.objectBubbleHit == false) {
            if (this.currentThirstLevel < 3 && this.currentGoalLevel < 3) {
                //and if we haven't added any thirst bubbles yet
                if (this.thirstBubbleAdded == false) {
                    //add it!
                    this.thirstBubble = new Bubble('vending', 'goal', 0, 1, 0, 0.2, 0.8, 0, 0.5, 1);
                    world.add(this.thirstBubble.container);
                    console.log("added thirst bubble");
                    this.thirstBubbleAdded = true;
                }

                //if we have added a thirst bubble and user hits it...
                //remove all of the hearts in UI
                //set objectBubbleHit to true
                if (this.thirstBubbleAdded && this.thirstBubble.updateStatus() == 1) {
                    this.running = "thirst";

                    userInfo.removeThirstHearts();

                    this.objectBubbleHit = true;

                    this.deleteOtherBubbles();
                    console.log("added thirst");

                    for (var i = 0; i < 5; i++){
                        this.thirstObjectArray.push(new ThirstObject(this.width, this.height));
                        world.add(this.thirstObjectArray[i].thirst);
                        console.log(this.thirstObjectArray[i].x, this.thirstObjectArray[i].y, this.thirstObjectArray[i].z);
                    }
                    this.thirstObjectAdded = true;
                }
            }
        }


        //if thirst is running...
        else if (this.running == "thirst"){
            //and we haven't hit all 3 yet...
            if (this.currentThirstLevel < 3){
                //check to see if each object has been hit.
                //if yes, remove it from world, increment count.
                for (var i = 0; i < this.thirstObjectArray.length; i++){
                    var thirstObject = this.thirstObjectArray[i];
                    if (this.thirstBubbleAdded && this.thirstObjectAdded && thirstObject.checkThirstHit() == 1 && !thirstObject.removed) {
                        console.log("removed thirst object", i);
                        world.remove(this.thirstObjectArray[i].thirst);
                        this.thirstObjectArray[i].removed = true;
                        this.currentThirstLevel++;
                        player.thirst = this.currentThirstLevel;
                        console.log("player thirst:" ,this.currentThirstLevel);
                        userInfo.increaseThirstCount(player.thirst);
                    }

                }
            }

            //IF thirst level is 3... return running to nothing, and objectBubbleHit to false.
            //also delete all the bananas on field
            else {
                this.resetThirst();
                console.log("DONE WITH THIRST!");
            }
        }
    };



    this.display = function () {

        if ((millis() / 1000) % 125 == 0){
            this.sound.play();
        }
        // console.log("made it");
        this.updateGoalStuff();

        // console.log("made it here2");
        this.updateHungerStuff();

        this.updateThirstStuff();

        // console.log("made it here3");
        if (this.currentGoalLevel == 3 && !this.portalAdded) {
            world.add(this.portal.portal);
            this.portalAdded = true;
            this.running = "done";
            this.objectBubbleHit = true;
        }
        if (this.portalAdded && this.portal.checkPortalHit()) {

        }


        for (let i = 0; i < this.deadPineTreeArray.length; i++) {
            let userPos = world.getUserPosition();
            let distance = dist(this.deadPineTreeArray[i].x, this.deadPineTreeArray[i].z, userPos.x, userPos.z);
            if (distance < 24) {
                for (let x = 0; x < world.scene.childNodes.length; x++) {
                    if (world.scene.childNodes[x] == this.deadPineTreeArray[i].tree.tag) {
                        const temp = world.scene.childNodes[x];
                        if (temp.getAttribute("visible") == false) {
                            temp.setAttribute("visible", "true");
                        }
                    }
                }
            }
            //OTHERWISE, REMOVE IT FROM WORLD.
            else {
                for (let x = 0; x < world.scene.childNodes.length; x++) {
                    if (world.scene.childNodes[x] == this.deadPineTreeArray[i].tree.tag) {
                        const temp = world.scene.childNodes[x];
                        if (temp.getAttribute("visible") == true) {
                            temp.setAttribute("visible", "false");
                        }
                    }
                }
            }

        }

        // console.log("world scene entity total: " + world.scene.childNodes.length);
    }


}

