/**
 * Created by Zhi Jian Zheng on 11/26/2016.
 */
// let sound;

function WinterForest(world) {
    // sound = loadSound('images/woosh.mp3');

    this.width = 100;
    this.height = 100;

    //BUBBLE ARRAY! For now, lets just do the goal bubble.
    // this.goalBubble = new Bubble('chicken', 0, 0, 0, 0, 0, 0, 1, 10);
    this.currentGoalLevel = player.wish;
    this.goalBubbleArray = [];
    for (var i = 0; i < 3; i++){
        var bubble = new Bubble('chicken', 'goal', 0, 3, 0, -4, -1.5, 1, 1, 1);
        this.goalBubbleArray.push(bubble);
    }
    this.goalAdded = false;
    this.goalObjectAdded = false;

    this.goalObjectArray = [];
    for (var i = 0; i < 3; i++){
        this.goalObjectArray.push(new GoalObject(this.width, this.height));
    }


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


    this.updateGoalStuff = function(){
        if (this.currentGoalLevel < 3){
            if (this.goalAdded == false){
                world.add(this.goalBubbleArray[this.currentGoalLevel].container);
                console.log("added ", this.goalBubbleArray[this.currentGoalLevel].container.tag);
                this.goalAdded = true;
            }

            // console.log(this.goalBubbleArray[this.currentGoalLevel].updateStatus());
            if (this.goalAdded && this.goalBubbleArray[this.currentGoalLevel].updateStatus() == 1){

                for (var i = 0; i < world.scene.childNodes.length; i++){
                    if (world.scene.childNodes[i] == this.goalBubbleArray[this.currentGoalLevel].container.tag){
                        world.scene.removeChild(world.scene.childNodes[i]);
                    }
                }

                // world.remove(this.goalBubbleArray[this.currentGoalLevel].container);

                world.add(this.goalObjectArray[this.currentGoalLevel].goal);
                this.goalObjectAdded = true;
            }

            if (this.goalAdded && this.goalObjectAdded && this.goalObjectArray[this.currentGoalLevel].checkHit() == 1){
                world.remove(this.goalObjectArray[this.currentGoalLevel].goal);
                this.currentGoalLevel++;
                player.wish = this.currentGoalLevel;

                userInfo.increaseWishCount(player.wish);

                this.goalAdded = false;
                this.goalObjectAdded = false;
            }
        }
    };

    this.portal = new Portal(this.width, this.height);
    this.portalAdded = false;

    this.display = function () {

        this.updateGoalStuff();
        if (this.currentGoalLevel == 3 && !this.portalAdded) {
            world.add(this.portal.portal);
            this.portalAdded = true;
        }
        if (this.portalAdded && this.portal.checkPortalHit()){
            //TODO SOMETHING HERE
        }


        for (let i = 0; i < this.deadPineTreeArray.length; i++) {
            let userPos = world.getUserPosition();
            let distance = dist(this.deadPineTreeArray[i].x, this.deadPineTreeArray[i].z, userPos.x, userPos.z);
            if (distance < 24) {
                for (let x = 0; x < world.scene.childNodes.length; x++){
                    if (world.scene.childNodes[x] == this.deadPineTreeArray[i].tree.tag){
                        const temp = world.scene.childNodes[x];
                        if (temp.getAttribute("visible") == false){
                            temp.setAttribute("visible", "true");
                        }
                    }
                }
            }
            //OTHERWISE, REMOVE IT FROM WORLD.
            else {
                for (let x = 0; x < world.scene.childNodes.length; x++){
                    if (world.scene.childNodes[x] == this.deadPineTreeArray[i].tree.tag){
                        const temp = world.scene.childNodes[x];
                        if (temp.getAttribute("visible") == true){
                            temp.setAttribute("visible", "false");
                        }
                    }
                }
            }

        }

        // console.log("world scene entity total: " + world.scene.childNodes.length);
    }


}