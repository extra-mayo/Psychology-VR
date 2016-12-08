function UserInfo(){

    this.camera = document.querySelector("#screenCamera");

    this.hungerHolder = document.createElement("a-entity");
    this.hungerHolder.setAttribute("id", "hunger");
    this.hungerHolder.setAttribute("bmfont-text", "text: Hunger:");
    this.hungerHolder.setAttribute("position", "0.4, 0.38, -0.5");
    this.hungerHolder.setAttribute("scale", "0.2, 0.2, 0.2");


    this.thirstHolder = document.createElement("a-entity");
    this.thirstHolder.setAttribute("id", "thirst");
    this.thirstHolder.setAttribute("bmfont-text", "text: Thirst:");
    this.thirstHolder.setAttribute("position", "0.2, 0.38, -0.5");
    this.thirstHolder.setAttribute("scale", "0.2, 0.2, 0.2");

    this.camera.appendChild(this.hungerHolder);
    this.camera.appendChild(this.thirstHolder);



}