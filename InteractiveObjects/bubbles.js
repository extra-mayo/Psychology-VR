function Bubble(model, type, x, y, z, offSetX, offSetY, offSetZ, scaleSize, latency) {
    this.type = type;
    this.container = new Container3D({
        x:x, y:y, z:z,
        visible:true
    });

    this.bubble = new Sphere({
        x:0, y:0, z:0,
        opacity:0.3,
        red:255, green:255, blue:255,
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

    this.chaseStatus = false;


    //-1 = user isn't within location
    //0 = haven't caught up to user
    //1 = caught up to user
    this.updateStatus = function() {
        let userPosition = world.getUserPosition();

        var distance = dist(userPosition.x, userPosition.z, this.container.getX(), this.container.getZ());
        // console.log(distance);
        // console.log(this.chaseStatus);
        if(!this.chaseStatus && millis()/1000 > latency && distance <= 30){

            this.chaseStatus = true;
            this.container.tag.setAttribute('visible', 'true');
            return -1;
        }
        if (this.chaseStatus && distance > 3){
            // console.log("PLEASE TRACK ME");
            this.trackUser();
        }
        else if(distance <= 3 && this.chaseStatus) {
            this.chaseStatus = false;
            this.container.tag.setAttribute('visible', 'false');
            // if(type == 'bubble-hunger-object') {
            //     hungerLevel = 100;
            // }
            // else if(type == 'bubble-hunger-object') {
            //     thirstLevel = 100;
            // }
            // else if (type == 'goal'){
            //     //spawn these things!
            //
            // }
            return 1;
        }
        return 0;

    };

    this.trackUser = function() {
        let userPosition = world.getUserPosition();
        this.container.nudge((userPosition.x - this.container.getX()) / 100, (userPosition.y - this.container.getY()) / 100, (userPosition.z - this.container.getZ()) / 100);

    };
}
