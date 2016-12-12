function Bubble(model, x, y, z, offSetX, offSetY, offSetZ, scaleSize, latency) {
    this.container = new Container3D({
        x:x, y:y, z:z,
        visible:true
    });
    scene.add(this.container);

    this.bubble = new Sphere({
        x:0, y:0, z:0,
        opacity:0.3,
        red:0, green:0, blue:0,
        radius: 1.5
    });
    this.object = new DAE({
        asset:model,
        x:offSetX, y:offSetY, z:offSetZ,
        scaleX:scaleSize,
        scaleY:scaleSize,
        scaleZ:scaleSize
    });

    this.container.addChild(this.bubble);
    this.container.addChild(this.object);

    this.status = "off1";

    this.updateStatus = function() {
        if(this.status == "off1" && millis()/1000 - startTime > latency && Math.abs(userPosition.x - this.container.x) <= 30 && Math.abs(userPosition.z - this.container.z) <= 30){
            this.status = "on";
            this.container.tag.setAttribute('visible', 'true');
        }

        if(Math.abs(userPosition.x - this.container.x) <= 0.2) {
            this.status = "off2";
            this.container.tag.setAttribute('visible', 'false');
            if(model == 'bubble-hunger-object') {
                hungerLevel = 0;
            }
            else if(model == 'bubble-thirst-object') {
                thirstLevel = 0;
            }
            else if(model == 'bubble-sleep-object') {
                sleepLevel = 0;
            }
            else if(model == 'bubble-obstacle-object') {
                wishLevel = 0;
            }
        }
    };

    this.trackUser = function() {
        if(this.status == "on") {
            this.container.nudge((userPosition.x - this.container.x) / 100, (userPosition.y - this.container.y) / 100, (userPosition.z - this.container.z) / 100);
        }
    };
}
