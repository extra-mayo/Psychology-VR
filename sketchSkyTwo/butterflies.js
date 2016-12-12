function Butterfly(x, y, z){
    this.flyCounter = 0;
    this.wingDir = 1;
    this.xNoiseOffset = random(0, 1000);
    this.yNoiseOffset = random(1000, 2000);
    this.zNoiseOffset = random(2000, 3000);

    this.butterflyContainer = new Container3D({
        x:x, y:y, z:z,
        visible:true
    });
    scene.add(this.butterflyContainer);

    this.leftWingContainer = new Container3D({
        x:0, y:0, z:-0.035,
        rotationY:-20
    });
    this.butterflyContainer.addChild(this.leftWingContainer);

    this.leftWingTop = new Cylinder({
        asset:'butterfly-tex',
        side:'double',
        radius:0.025,
        height:0.005,
        x:0.013, y:0, z:0
    });
    this.leftWingBottom = new Cylinder({
        asset:'butterfly-tex',
        side:'double',
        radius:0.04,
        height:0.005,
        x:-0.04, y:0, z:0
    });
    this.leftWingContainer.addChild(this.leftWingTop);
    this.leftWingContainer.addChild(this.leftWingBottom);

    this.rightWingContainer = new Container3D({
        x:0, y:0, z:0.035,
        rotationY:20
    });
    this.butterflyContainer.addChild(this.rightWingContainer);

    this.rightWingTop = new Cylinder({
        asset:'butterfly-tex',
        side:'double',
        radius:0.025,
        height:0.005,
        x:0.013, y:0, z:0
    });
    this.rightWingBottom = new Cylinder({
        asset:'butterfly-tex',
        side:'double',
        radius:0.04,
        height:0.005,
        x:-0.04, y:0, z:0
    });
    this.rightWingContainer.addChild(this.rightWingTop);
    this.rightWingContainer.addChild(this.rightWingBottom);

    this.middle = new Cylinder({
        asset:'butterfly-tex',
        height:0.06,
        radius:0.005,
        x:-0.01, y:0, z:0,
        rotationZ:90

    });
    this.butterflyContainer.addChild(this.middle);

    this.fly = function(){

        var xMovement = map(noise(this.xNoiseOffset), 0, 1, -0.05, 0.05);
        var yMovement = map(noise(this.yNoiseOffset), 0, 1, -0.05, 0.05);
        var zMovement = map(noise(this.zNoiseOffset), 0, 1, -0.05, 0.05);

        // if(this.butterflyContainer.y < 0 || this.butterflyContainer.y > 95 || this.butterflyContainer.x < -50 || this.butterflyContainer.x > 50 || this.butterflyContainer.z < -50 || this.butterflyContainer.z > 50){
        //     this.xNoiseOffset += 100;
        //     this.yNoiseOffset += 100;
        //     this.zNoiseOffset += 100;
        //
        //     var xMovement = map(noise(this.xNoiseOffset), 0, 1, -0.1, 0.1);
        //     var yMovement = map(noise(this.yNoiseOffset), 0, 1, -0.1, 0.1);
        //     var zMovement = map(noise(this.zNoiseOffset), 0, 1, -0.1, 0.1);
        //
        //     this.butterflyContainer.nudge(xMovement, yMovement, zMovement);
        // }

        this.butterflyContainer.nudge(xMovement, yMovement, zMovement);

        this.xNoiseOffset += 0.01;
        this.yNoiseOffset += 0.01;
        this.zNoiseOffset += 0.01;


        if(this.flyCounter!= 10) {
            if(this.wingDir == 1) {
                this.leftWingContainer.spinX(5);
                this.rightWingContainer.spinX(-5);
                this.flyCounter += 1;
            }
            else if(this.wingDir == -1) {
                this.leftWingContainer.spinX(-5);
                this.rightWingContainer.spinX(5);
                this.flyCounter += 1;
            }
        }
        else{
            this.flyCounter = 0;
            this.wingDir *= -1;
        }
    }
}


function createButterflies(num) {
    ranX = random(userPosition.x-10, userPosition.x+10);
    ranY = random(userPosition.y, userPosition.y+5);
    ranZ = random(userPosition.z-10, userPosition.z+10);

    for(var i=0; i<num; i++) {
        var butterfly = new Butterfly(ranX,ranY,ranZ);
        butterflyArray.push(butterfly);
    }
}
