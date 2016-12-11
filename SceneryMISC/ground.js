/**
 * Created by Zhi Jian Zheng on 11/27/2016.
 */

AFRAME.registerComponent('ground', {
    init: function () {
        var objectLoader;
        var object3D = this.el.object3D;
        var material = new THREE.LineBasicMaterial({
            color: "white"
        });
        var MODEL_URL = 'https://cdn.aframe.io/link-traversal/Models/ground.json';
        // var MODEL_URL = 'https://cdn.aframe.io/link-traversal/models/groundCity.json';
        // var MODEL_URL = 'https://cdn.aframe.io/link-traversal/models/groundMountains.json';
        // var MODEL_URL = 'https://cdn.aframe.io/link-traversal/models/groundSunrise.json';
        if (this.objectLoader) { return; }
        objectLoader = this.objectLoader = new THREE.ObjectLoader();
        objectLoader.crossOrigin = '';
        objectLoader.load(MODEL_URL, function (obj) {
            obj.children.forEach(function (value) {
                value.receiveShadow = true;
                // console.log(value);
                // value.geometry.color[0] = "white";
                value.material.shading = THREE.FlatShading;
            });
            object3D.add(obj);
        });
    }
});

