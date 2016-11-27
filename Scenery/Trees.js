/**
 * Created by Zhi Jian Zheng on 11/27/2016.
 */

//x and z as parameters, y isn't needed as the trees will be elevated at the ground level
function threeTrees(x, z){
    this.x = x;
    this.y = 0;
    this.z = z;

    //TODO: DAE or create shape from start?


    this.tree = new DAE({
        x: this.x,
        y: this.y,
        z: this.z,
        scaleX: 0.5,
        scaleY: 0.5,
        scaleZ: 0.5,
        asset: "treeModel"
    });
}
