class Renderable {
    
    mShader: SimpleShader;
    private mColor: number[];
    private mTransform: Transform;
    
    constructor(shader: SimpleShader) {
        this.mShader = shader;
        this.mColor = [1, 1, 1, 1]; // a color.
        this.mTransform = new Transform();
    }

    getTransform(): Transform {
        return this.mTransform;
    }
    
    setColor(color: number[]) {
        this.mColor = color;
    }
    
    getColor(): number[] {
        return this.mColor;
    }

    
    draw(viewProjectionMatrix: any) {
        var gl = GameEngine.Core.getGL();
        this.mShader.activateShader(this.mColor, viewProjectionMatrix);
        //this.mShader.
        console.log('the modified vewProjMatrix = ' + viewProjectionMatrix);
       // console.log('matrix transform = ' + matrixTransform);
        console.log('from the Transform class = ' + this.getTransform().getXForm());
        this.mShader.loadObjectTransform(this.getTransform().getXForm());
        console.log('the umodeltransform = ' + this.mShader.mModelTransform);
        console.log('theb  proje transform = ' + this.mShader.mViewProjectionTransform);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        
    }
}