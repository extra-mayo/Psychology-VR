function UserInfo(player){

    this.hunger = player.hunger;
    this.thirst = player.thirst;
    this.wish = player.wish;

    this.camera = document.querySelector("#screenCamera");

    this.hungerHolder = document.createElement("a-entity");
    this.hungerHolder.setAttribute("id", "hunger");
    this.hungerHolder.setAttribute("bmfont-text", "text: Hunger:");
    this.hungerHolder.setAttribute("position", "-0.25, 0.2, -0.5");
    //this.hungerHolder.setAttribute("position", "0.4, 0.38, -0.5");
    this.hungerHolder.setAttribute("scale", "0.1, 0.1, 0.1");

    this.emptyHungerArray = [];

    <!-- DISPLAY Hunger Images-->
    this.EmptyHungerOne = new Plane({
        x: -0.17, y: 0.205, z: -0.5,
        width: 0.03, height: 0.03,
        asset: 'emptyHungerImage',
        transparent: true,
        visible: false
        // rotationX: -90, metalness: 0.25
    });
    this.emptyHungerArray.push(this.EmptyHungerOne);
    this.camera.appendChild(this.EmptyHungerOne.tag);

    this.EmptyHungerTwo = new Plane({
        x: -0.14, y: 0.205, z: -0.5,
        width: 0.03, height: 0.03,
        asset: 'emptyHungerImage',
        transparent: true,
        visible: false
        // rotationX: -90, metalness: 0.25
    });
    this.camera.appendChild(this.EmptyHungerTwo.tag);
    this.emptyHungerArray.push(this.EmptyHungerTwo);

    this.EmptyHungerThree = new Plane({
        x: -0.11, y: 0.205, z: -0.5,
        width: 0.03, height: 0.03,
        asset: 'emptyHungerImage',
        transparent: true,
        visible: false
        // rotationX: -90, metalness: 0.25
    });
    this.emptyHungerArray.push(this.EmptyHungerThree);

    this.camera.appendChild(this.EmptyHungerThree.tag);

    this.hungerFilledArray = [];
    this.hunger1 = new Plane({
        x: -0.17, y: 0.205, z: -0.5,
        width: 0.03, height: 0.03,
        asset: 'hungerImage',
        transparent: true,
        visible: true,
        // rotationX: -90, metalness: 0.25
    });

    this.camera.appendChild(this.hunger1.tag);
    this.hungerFilledArray.push(this.hunger1);

    this.hunger2 = new Plane({
        x: -0.14, y: 0.205, z: -0.5,
        width: 0.03, height: 0.03,
        asset: 'hungerImage',
        transparent: true,
        visible: true
        // rotationX: -90, metalness: 0.25
    });
    this.camera.appendChild(this.hunger2.tag);
    this.hungerFilledArray.push(this.hunger2);

    this.hunger3 = new Plane({
        x: -0.11, y: 0.205, z: -0.5,
        width: 0.03, height: 0.03,
        asset: 'hungerImage',
        transparent: true,
        // rotationX: -90, metalness: 0.25
        visible: true
    });
    this.camera.appendChild(this.hunger3.tag);
    this.hungerFilledArray.push(this.hunger3);


    this.thirstHolder = document.createElement("a-entity");
    this.thirstHolder.setAttribute("id", "thirst");
    this.thirstHolder.setAttribute("bmfont-text", "text: Thirst:");
    this.thirstHolder.setAttribute("position", "0.1, 0.2, -0.5");
    //this.thirstHolder.setAttribute("position", "0.2, 0.38, -0.5");
    this.thirstHolder.setAttribute("scale", "0.1, 0.1, 0.1");


    this.emptyThirstArray = [];

    this.EmptyThirstOne = new Plane({
        x: 0.18, y: 0.205, z: -0.5,
        width: 0.028, height: 0.028,
        asset: 'emptyThirstImage',
        transparent: true,
        visible: false
    });
    this.camera.appendChild(this.EmptyThirstOne.tag);
    this.emptyThirstArray.push(this.EmptyThirstOne);

    this.EmptyThirstTwo = new Plane({
        x: 0.21, y: 0.205, z: -0.5,
        width: 0.028, height: 0.028,
        asset: 'emptyThirstImage',
        transparent: true,
        visible: false
        // rotationX: -90, metalness: 0.25
    });
    this.camera.appendChild(this.EmptyThirstTwo.tag);
    this.emptyThirstArray.push(this.EmptyThirstTwo);

    this.EmptyThirstThree = new Plane({
        x: 0.24, y: 0.205, z: -0.5,
        width: 0.028, height: 0.028,
        asset: 'emptyThirstImage',
        transparent: true,
        visible: false
        // rotationX: -90, metalness: 0.25
    });
    this.camera.appendChild(this.EmptyThirstThree.tag);
    this.emptyThirstArray.push(this.EmptyThirstThree);


    this.thirstFilledArray = [];
    <!-- DISPLAY Thirst Images-->
    this.thirstOne = new Plane({
        x: 0.18, y: 0.205, z: -0.5,
        width: 0.028, height: 0.028,
        asset: 'thirstImage',
        transparent: true,
        visible: true,
        // rotationX: -90, metalness: 0.25
    });
    this.camera.appendChild(this.thirstOne.tag);
    this.thirstFilledArray.push(this.thirstOne);

    this.thirstTwo = new Plane({
        x: 0.21, y: 0.205, z: -0.5,
        width: 0.028, height: 0.028,
        asset: 'thirstImage',
        transparent: true,
        visible: true,
        // rotationX: -90, metalness: 0.25
    });
    this.camera.appendChild(this.thirstTwo.tag);
    this.thirstFilledArray.push(this.thirstTwo);

    this.thirstThree = new Plane({
        x: 0.24, y: 0.205, z: -0.5,
        width: 0.028, height: 0.028,
        asset: 'thirstImage',
        transparent: true,
        visible: true,
        // rotationX: -90, metalness: 0.25
    });
    this.camera.appendChild(this.thirstThree.tag);
    this.thirstFilledArray.push(this.thirstThree);



    this.wishHolder = document.createElement("a-entity");
    this.wishHolder.setAttribute("id", "wish");
    this.wishHolder.setAttribute("bmfont-text", "text: Wish:");
    this.wishHolder.setAttribute("position", "0.1, -0.2, -0.5");
    this.wishHolder.setAttribute("scale", "0.1, 0.1, 0.1");

    this.wishOne = new Plane({
        x: 0.18, y: -0.194, z: -0.5,
        width: 0.025, height: 0.025,
        asset: 'emptyWishImage',
        transparent: true
        // rotationX: -90, metalness: 0.25
    });
    this.camera.appendChild(this.wishOne.tag);

    this.wishTwo = new Plane({
        x: 0.21, y: -0.194, z: -0.5,
        width: 0.025, height: 0.025,
        asset: 'emptyWishImage',
        transparent: true
        // rotationX: -90, metalness: 0.25
    });
    this.camera.appendChild(this.wishTwo.tag);

    this.wishThree = new Plane({
        x: 0.24, y: -0.194, z: -0.5,
        width: 0.025, height: 0.025,
        asset: 'emptyWishImage',
        transparent: true
        // rotationX: -90, metalness: 0.25
    });
    this.camera.appendChild(this.wishThree.tag);

    //We can either: 1) add arbitrarily, OR 2) make an actual variable to delete
    this.wishFilledArray = [];

    this.wishFilledArray.push(new Plane({
        x: 0.18, y: -0.194, z: -0.5,
        width: 0.025, height: 0.025,
        asset: 'wishImage',
        transparent: true
        // rotationX: -90, metalness: 0.25
    }));

    this.wishFilledArray.push(new Plane({
        x: 0.21, y: -0.194, z: -0.5,
        width: 0.025, height: 0.025,
        asset: 'wishImage',
        transparent: true
    }));

    this.wishFilledArray.push(new Plane({
        x: 0.24, y: -0.194, z: -0.5,
        width: 0.025, height: 0.025,
        asset: 'wishImage',
        transparent: true
        // rotationX: -90, metalness: 0.25
    }));




    this.camera.appendChild(this.hungerHolder);
    this.camera.appendChild(this.thirstHolder);

    this.camera.appendChild(this.wishHolder);

    this.increaseWishCount = function(number){
        this.wish = player.wish;
        this.camera.appendChild(this.wishFilledArray[number-1].tag);
    };

    this.increaseThirstCount = function(number){
        this.thirstFilledArray[number -1].tag.setAttribute("visible", "true");
    };

    this.increaseHungerCount = function(number){
        this.hungerFilledArray[number - 1].tag.setAttribute("visible", "true");
    };


    this.removeHungerHearts = function(){
        for (var i = 0; i < this.hungerFilledArray.length; i++){
            this.hungerFilledArray[i].tag.setAttribute("visible", "false");
            this.emptyHungerArray[i].tag.setAttribute("visible", "true");
        }
    };

    this.removeThirstHearts = function (){
        for (var i = 0; i < this.thirstFilledArray.length; i++){
            this.thirstFilledArray[i].tag.setAttribute("visible", "false");
            this.emptyThirstArray[i].tag.setAttribute("visible", "true");
        }
    }





}
