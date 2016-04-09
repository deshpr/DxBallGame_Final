var Renderable = (function () {
    function Renderable(shader) {
        this.mShader = shader;
        this.mColor = [1, 1, 1, 1]; // a color.
        this.mTransform = new Transform();
    }
    Renderable.prototype.getTransform = function () {
        return this.mTransform;
    };
    Renderable.prototype.setColor = function (color) {
        this.mColor = color;
    };
    Renderable.prototype.getColor = function () {
        return this.mColor;
    };
    Renderable.prototype.draw = function (viewProjectionMatrix) {
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
    };
    return Renderable;
})();
//# sourceMappingURL=Renderable.js.map