 class Camera {


    private nearPlane: number;
    private farPlane: number;
    private mwcCenter: Float32Array;
    private mwcWidth: number;
    private viewPort: number[];
    private mViewProjMatrix: any;
    private mViewMatrix: any;
    private mProjMatrix: any;
    private mBgColor: number[];


    constructor(mwcCenter: Float32Array, viewPort: any, mwcWidth: number) {
        this.mwcCenter = mwcCenter;
        this.viewPort = viewPort;
        this.mwcWidth = mwcWidth;
        this.mProjMatrix = mat4.create();
        this.mViewMatrix = mat4.create();
        mat4.identity(this.mProjMatrix);
        mat4.identity(this.mViewMatrix);
        this.mViewProjMatrix = mat4.create();
        this.mBgColor = [0.8, 0.8, 0.8, 1]; // RGBA
        this.nearPlane = 0;
        this.farPlane = 1000;
    }
    
    public setCenter(x: number, y: number) {
        this.mwcCenter[0] = x;
        this.mwcCenter[1] = y;
    }
    
    public setViewPort(viewPort: number[]) {
        this.viewPort = viewPort;
    }

    public getViewPort(): number[] {
        return this.viewPort;
    }

    public getBackgroundColor(): number[] {
        return this.mBgColor;
    }
    
    public setBackgroundColor(color: number[]) {
        this.mBgColor = color;
    }
    
    public setWidth(width: number) {
        this.mwcWidth = width;
    }

    public getViewProjectionMatrix(): any {
        return this.mViewProjMatrix;
    }


    private setUpViewMatrix(): any{
        mat4.lookAt(
            this.mViewMatrix,
            vec3.createFrom(this.mwcCenter[0], this.mwcCenter[1], 10),
            vec3.createFrom(this.mwcCenter[0], this.mwcCenter[1], 0),
            vec3.createFrom(0,1,0)
        );
        console.log('the view matrix is init to: ');
        console.log(this.mViewMatrix);
    }
     
    private setUpProjectionMatrix(): any {
        var halfWidth: number = this.mwcWidth * 0.5;
        var halfHeight: number = halfWidth * (this.viewPort[3] / this.viewPort[2]);
        console.log('half height = ' + halfHeight);
        mat4.ortho(
            -1 * halfWidth,
            halfWidth,
             -1 * halfHeight,
            halfHeight,
            this.nearPlane,
            this.farPlane,
            this.mProjMatrix
        );
        console.log('the projection matrix is init to');
        console.log(this.mProjMatrix);
    }

    public calculateAndSetViewProjectionMatrix(): void {
        mat4.multiply(
            this.mProjMatrix,
            this.mViewMatrix,
            this.mViewProjMatrix
        );
    }

    public setupViewProjection():void {
        // Set up the view port.
        var gl:WebGLRenderingContext = GameEngine.Core.getGL();
        gl.viewport(this.viewPort[0],
            this.viewPort[1],
            this.viewPort[2],
            this.viewPort[3]);
        gl.scissor(this.viewPort[0], this.viewPort[1], this.viewPort[2], this.viewPort[3]);
        gl.enable(gl.SCISSOR_TEST);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.disable(gl.SCISSOR_TEST);
        gl.clearColor(this.mBgColor[0], this.mBgColor[1], this.mBgColor[2], this.mBgColor[3]);

        this.setUpViewMatrix();
        this.setUpProjectionMatrix();
        this.calculateAndSetViewProjectionMatrix();
       

    }

}