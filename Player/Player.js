/**
 * Created by Zhi Jian Zheng on 12/11/2016.
 */

function Player(){

    let userPos = world.getUserPosition();
    this.x = userPos.x;
    this.y = userPos.y;
    this.z = userPos.z;

    this.hunger = 3;
    this.thirst = 3;
    this.tiredness = 3;
    this.wish = 3;

    // this.update() = function(){
    //
    // }

    this.updatePosition = function(){

        let userPos = world.getUserPosition();
        this.x = userPos.x;
        this.y = userPos.y;
        this.z = userPos.z;

        if (this.x < -33 || this.x > 33 || this.z < -33 || this.z > 33){
            this.x = random(-20, 20);
            this.z = random(-20, 20);
            world.setUserPosition(this.x, this.y, this.z);
        }
        this.updateUserStats();

    };

    this.updateUserStats = function(){
        //TODO FIX THIS!!
        if ((int)(millis() / 1000) % 10 == 0){
            this.hunger--;
            console.log(this.hunger, millis()/1000);
        }
    }



}