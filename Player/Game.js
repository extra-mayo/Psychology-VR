/**
 * Created by Zhi Jian Zheng on 12/11/2016.
 */

function Game (){
    this.gameOption = 0;
    this.menu = new Plane({
        x: 0, y: 1, z: 0,
        // rotationX: 90,
        red: 100, blue: 100, green: 100,
        width: 5, height: 5,
        opacity: 0.3
    });


    this.text = document.createElement("a-entity");
    this.text.setAttribute("bmfont-text", "text: Hello!; color: white");
    this.text.setAttribute("position", "-0.8, 2.5, 0");
    // this.text.setAttribute("align", "center");
    // this.text.setAttribute("color", "#");
    this.text.setAttribute("scale", "3, 3, 3");

    this.textTwo = document.createElement("a-entity");
    this.textTwo.setAttribute("bmfont-text", "text: Please select goal:; color: white");
    this.textTwo.setAttribute("position", "-1.8, 2, 0");
    this.textTwo.setAttribute("scale", "2, 2, 2");

    var that = this;

    this.goalOne = new Plane({
        x: 0, y: 1, z: 0,
        // rotationX: 90,
        red: 0, blue: 255, green: 0,
        width: 4, height: 1,
        opacity: 0.3,
        transparent: true,
    });

    this.goalOneText = document.createElement("a-entity");
    this.goalOneText.setAttribute("bmfont-text", "text: Weight loss; color: white");
    this.goalOneText.setAttribute("position", "-1.3, 0.9, 0.02");
    this.goalOneText.setAttribute("scale", "2, 2, 2");

    this.goalOnePlate = new Plane({
        x: 0, y: 1, z: 0.05,
        // rotationX: 90,
        red: 0, blue: 255, green: 0,
        width: 4, height: 1,
        opacity: 0,
        transparent: true,
        clickFunction: function(e){
            that.gameOption = 1;
            that.removeMenu();
        }
    });

    this.displayMenu = function () {
        world.add(this.menu);
        world.scene.appendChild(this.text);
        world.scene.appendChild(this.textTwo);
        world.add(this.goalOne);
        world.scene.appendChild(this.goalOneText);
        world.add(this.goalOnePlate);
    };

    this.removeMenu = function(){
        world.remove(this.menu);
        world.remove(this.goalOne);
        world.remove(this.goalOnePlate);
        for (var i = 0; i < world.scene.childNodes.length; i++){
            if (world.scene.childNodes[i] == this.text){
                world.scene.removeChild(world.scene.childNodes[i]);
            }
            if (world.scene.childNodes[i] == this.textTwo){
                world.scene.removeChild(world.scene.childNodes[i]);
            }
            if (world.scene.childNodes[i] == this.goalOneText){
                world.scene.removeChild(world.scene.childNodes[i]);
            }
        }
    }

}