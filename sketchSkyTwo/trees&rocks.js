/**
 * Created by skyzn on 12/4/2016.
 */

function oneTree(x,z){
    this.model = new DAE({
        asset:'singleTree',
        x:x,
        y:0,
        z:z,
        scaleX:4,
        scaleY:4,
        scaleZ:4,
        visible:false
    });
    scene.add(this.model);

    this.getX = function() {
        return this.model.x;
    };
    this.getY = function() {
        return this.model.y;
    };
    this.getZ = function() {
        return this.model.z;
    };

    this.updateVis = function() {
        if(Math.abs(this.model.x - userPosition.x) < 100 && Math.abs(this.model.z - userPosition.z) < 100){
            this.model.tag.setAttribute('visible', 'true');
        }

        if(Math.abs(this.model.x - userPosition.x) >= 100 && Math.abs(this.model.z - userPosition.z) >= 100){
            this.model.tag.setAttribute('visible', 'false');
        }
    }
}

function voxelTree(x,z){
    this.model = new OBJ({
        asset:'voxelTree-obj',
        mtl:'voxelTree-mtl',
        x:x,
        y:0,
        z:z,
        scaleX:0.1,
        scaleY:0.1,
        scaleZ:0.1,
        visible:false
    });
    scene.add(this.model);

    this.getX = function() {
        return this.model.x;
    };
    this.getY = function() {
        return this.model.y;
    };
    this.getZ = function() {
        return this.model.z;
    };

    this.updateVis = function() {
        if(Math.abs(this.model.x - userPosition.x) < 100 && Math.abs(this.model.z - userPosition.z) < 100){
            this.model.tag.setAttribute('visible', 'true');
        }

        if(Math.abs(this.model.x - userPosition.x) >= 100 && Math.abs(this.model.z - userPosition.z) >= 100){
            this.model.tag.setAttribute('visible', 'false');
        }
    }
}

function Rock(x,z){
    this.model = new OBJ({
        asset:'rock-obj',
        mtl:'rock-mtl',
        x:x,
        y:0,
        z:z,
        scaleX:0.1,
        scaleY:0.1,
        scaleZ:0.1
    });
    scene.add(this.model);
}
