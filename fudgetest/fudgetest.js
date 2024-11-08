"use strict";
var FirstFudge;
(function (FirstFudge) {
    var f = FudgeCore;
    const camera = new f.ComponentCamera();
    const cubeNode = new f.Node("Cube");
    let viewport;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        const canvas = document.querySelector("canvas");
        const mesh = new f.MeshCube("CubeMesh");
        const cmpMesh = new f.ComponentMesh(mesh);
        cmpMesh.mtxPivot.translateZ(2);
        cubeNode.addComponent(cmpMesh);
        const material = new f.Material("cubemat", f.ShaderLit);
        const cmpMat = new f.ComponentMaterial(material);
        cmpMat.clrPrimary.set(1, 1, 1, 1);
        cubeNode.addComponent(cmpMat);
        viewport = new f.Viewport();
        viewport.initialize("viewport", cubeNode, camera, canvas);
        console.log(camera);
        console.log(cubeNode);
        console.log(mesh);
        console.log(material);
        console.log(canvas);
        console.log(viewport);
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        f.Loop.start();
    }
    function update() {
        const tSpeed = 3 / 1;
        const rSpeed = 360 / 3;
        const frameTimeInMillieSeconds = f.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMillieSeconds / 1000);
        const up = f.Vector3.Y();
        viewport.camera.mtxPivot.lookAt(cubeNode.mtxWorld.translation);
        f.Recycler.store(up);
        viewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
