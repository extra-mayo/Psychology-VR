function UserInfo(){

    this.camera = document.querySelector("#screenCamera");

    this.hungerHolder = document.createElement("a-entity");
    this.hungerHolder.setAttribute("id", "hunger");
    this.hungerHolder.setAttribute("bmfont-text", "text: Hunger:");
    this.hungerHolder.setAttribute("position", "-0.2, 0.2, -0.5");
    //this.hungerHolder.setAttribute("position", "0.4, 0.38, -0.5");
    this.hungerHolder.setAttribute("scale", "0.2, 0.2, 0.2");


    this.thirstHolder = document.createElement("a-entity");
    this.thirstHolder.setAttribute("id", "thirst");
    this.thirstHolder.setAttribute("bmfont-text", "text: Thirst:");
    this.thirstHolder.setAttribute("position", "0.05, 0.2, -0.5");
    //this.thirstHolder.setAttribute("position", "0.2, 0.38, -0.5");
    this.thirstHolder.setAttribute("scale", "0.2, 0.2, 0.2");


    this.sleepHolder = document.createElement("a-entity");
    this.sleepHolder.setAttribute("id", "sleep");
    this.sleepHolder.setAttribute("bmfont-text", "text: Sleep:");
    this.sleepHolder.setAttribute("position", "-0.2, -0.2, -0.5");
    this.sleepHolder.setAttribute("scale", "0.2, 0.2, 0.2");
    this.sleepHolder.setAttribute("color", "255, 0, 0");


    this.wishHolder = document.createElement("a-entity");
    this.wishHolder.setAttribute("id", "wish");
    this.wishHolder.setAttribute("bmfont-text", "text: Wish:");
    this.wishHolder.setAttribute("position", "0.05, -0.2, -0.5");
    this.wishHolder.setAttribute("scale", "0.2, 0.2, 0.2");

    this.camera.appendChild(this.hungerHolder);
    this.camera.appendChild(this.thirstHolder);
    this.camera.appendChild(this.sleepHolder);
    this.camera.appendChild(this.wishHolder);




}
