function UserInfo(player){

    this.hunger = player.hunger;
    this.thirst = player.thirst;

    this.missingHunger = 3 - this.hunger;
    this.missingThirst = 3 - this.thirst;

    this.camera = document.querySelector("#screenCamera");

    this.hungerHolder = document.createElement("a-entity");
    this.hungerHolder.setAttribute("id", "hunger");
    this.hungerHolder.setAttribute("bmfont-text", "text: Hunger:");
    this.hungerHolder.setAttribute("position", "-0.25, 0.2, -0.5");
    //this.hungerHolder.setAttribute("position", "0.4, 0.38, -0.5");
    this.hungerHolder.setAttribute("scale", "0.1, 0.1, 0.1");


    <!-- DISPLAY Hunger Images-->
    this.hungerOne = new Plane({
        x: -0.17, y: 0.205, z: -0.5,
        width: 0.03, height: 0.03,
        asset: 'hungerImage',
        transparent: true
        // rotationX: -90, metalness: 0.25
    });

    this.camera.appendChild(this.hungerOne.tag);

    this.hungerTwo = new Plane({
        x: -0.14, y: 0.205, z: -0.5,
        width: 0.03, height: 0.03,
        asset: 'hungerImage',
        transparent: true
        // rotationX: -90, metalness: 0.25
    });
    this.camera.appendChild(this.hungerTwo.tag);

    this.hungerThree = new Plane({
        x: -0.11, y: 0.205, z: -0.5,
        width: 0.03, height: 0.03,
        asset: 'emptyHungerImage',
        transparent: true
        // rotationX: -90, metalness: 0.25
    });
    this.camera.appendChild(this.hungerThree.tag);

    this.thirstHolder = document.createElement("a-entity");
    this.thirstHolder.setAttribute("id", "thirst");
    this.thirstHolder.setAttribute("bmfont-text", "text: Thirst:");
    this.thirstHolder.setAttribute("position", "0.1, 0.2, -0.5");
    //this.thirstHolder.setAttribute("position", "0.2, 0.38, -0.5");
    this.thirstHolder.setAttribute("scale", "0.1, 0.1, 0.1");

    <!-- DISPLAY Thirst Images-->
    this.thirstOne = new Plane({
        x: 0.18, y: 0.205, z: -0.5,
        width: 0.028, height: 0.028,
        asset: 'thirstImage',
        transparent: true
        // rotationX: -90, metalness: 0.25
    });
    this.camera.appendChild(this.thirstOne.tag);

    this.thirstTwo = new Plane({
        x: 0.21, y: 0.205, z: -0.5,
        width: 0.028, height: 0.028,
        asset: 'thirstImage',
        transparent: true
        // rotationX: -90, metalness: 0.25
    });
    this.camera.appendChild(this.thirstTwo.tag);

    this.thirstThree = new Plane({
        x: 0.24, y: 0.205, z: -0.5,
        width: 0.028, height: 0.028,
        asset: 'emptyThirstImage',
        transparent: true
        // rotationX: -90, metalness: 0.25
    });
    this.camera.appendChild(this.thirstThree.tag);


    this.sleepHolder = document.createElement("a-entity");
    this.sleepHolder.setAttribute("id", "sleep");
    this.sleepHolder.setAttribute("bmfont-text", "text: Sleep:");
    this.sleepHolder.setAttribute("position", "-0.25, -0.2, -0.5");
    this.sleepHolder.setAttribute("scale", "0.1, 0.1, 0.1");
    this.sleepHolder.setAttribute("color", "255, 0, 0");


    this.wishHolder = document.createElement("a-entity");
    this.wishHolder.setAttribute("id", "wish");
    this.wishHolder.setAttribute("bmfont-text", "text: Wish:");
    this.wishHolder.setAttribute("position", "0.1, -0.2, -0.5");
    this.wishHolder.setAttribute("scale", "0.1, 0.1, 0.1");

    this.camera.appendChild(this.hungerHolder);
    this.camera.appendChild(this.thirstHolder);
    this.camera.appendChild(this.sleepHolder);
    this.camera.appendChild(this.wishHolder);

    this.updateInformation = function(){

    }



}
