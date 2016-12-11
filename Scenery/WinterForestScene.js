/**
 * Created by Zhi Jian Zheng on 11/26/2016.
 */
// let sound;

function WinterForest(world) {
    // sound = loadSound('images/woosh.mp3');
    this.width = 100;
    this.height = 100;
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

    // console.log("ground", this.ground.tag);


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

    this.display = function () {

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