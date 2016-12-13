function Apple(x,y,z){
    this.sphere = new Sphere({
        x:x, y:y, z:z,
        red:181, green:29, blue:29,
        radius:0.3,
        visible:true,
        clickFunction: function(apple) {
            scene.remove(apple);
            hungerLevel += 1;
        }
    });
    scene.add(this.sphere);
}

function createApples(){
    for (var i=0; i<70; i++){
        var treeSelect = parseInt(random(0, treeArray.length));
        console.log(treeSelect);
        console.log(treeArray[treeSelect]);
        var x = treeArray[treeSelect].getX();
        var y = treeArray[treeSelect].getY();
        var z = treeArray[treeSelect].getZ();
        apple = new Apple(random(x-0.9, x-1.8),random(y+3, y+4),random(z-0.9, z-1.8));
        appleArray.push(apple);
    }
    for (var i=0; i<70; i++){
        var treeSelect = parseInt(random(0, treeArray.length));
        console.log(treeSelect);
        console.log(treeArray[treeSelect]);
        var x = treeArray[treeSelect].getX();
        var y = treeArray[treeSelect].getY();
        var z = treeArray[treeSelect].getZ();
        apple = new Apple(random(x+0.9, x+1.8),(random(y+3, y+4)),random(z+0.9, z+1.8));
        appleArray.push(apple);
    }

}

/**
 * Created by skyzn on 12/4/2016.
 */
