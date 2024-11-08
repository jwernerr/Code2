namespace FirstFudge {
    import f = FudgeCore;


    const camera: f.ComponentCamera = new f.ComponentCamera();

    const cubeNode: f.Node = new f.Node("Cube");

    let viewport: f.Viewport;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

        const mesh: f.Mesh = new f.MeshCube("CubeMesh");
        const cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);

        cmpMesh.mtxPivot.translateZ(2);

        cubeNode.addComponent(cmpMesh);

        const material: f.Material = new f.Material("cubemat", f.ShaderLit);
        const cmpMat: f.ComponentMaterial = new f.ComponentMaterial(material);
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

        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();
    }



    function update(): void {

        const tSpeed: number = 3 / 1;
        const rSpeed: number = 360 / 3;
        const frameTimeInMillieSeconds: number = f.Loop.timeFrameGame;
        const frameTimeInSeconds: number = (frameTimeInMillieSeconds / 1000);

        const up: f.Vector3 = f.Vector3.Y();
        viewport.camera.mtxPivot.lookAt(cubeNode.mtxWorld.translation);
        f.Recycler.store(up);
        viewport.draw();
    }
}