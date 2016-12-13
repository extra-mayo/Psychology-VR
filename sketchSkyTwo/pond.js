/**
 * Created by skyzn on 12/11/2016.
 */

function Pond(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.model = new DAE({
        asset:'pond',
        x:x-26, y:y, z:z+15,
        scaleX:0.7,
        scaleY:0.7,
        scaleZ:0.7,
    });
    scene.add(this.model);

    this.returnPos = function() {
        return [this.x, this.z];
    }
}
