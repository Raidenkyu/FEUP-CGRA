/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

 class MyFloor extends CGFobject
 {
	constructor(scene)
	{
		super(scene);
		this.cube = new MyUnitCubeQuad(scene);
		this.cube.initBuffers();
	};
	display(){
		this.scene.scalate(8,0.1,6);
    this.cube.display();
	};
 }
