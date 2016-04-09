var Camera = (function () {
    function Camera(mwcCenter, viewPort, mwcWidth) {
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
    Camera.prototype.setCenter = function (x, y) {
        this.mwcCenter[0] = x;
        this.mwcCenter[1] = y;
    };
    Camera.prototype.setViewPort = function (viewPort) {
        this.viewPort = viewPort;
    };
    Camera.prototype.getViewPort = function () {
        return this.viewPort;
    };
    Camera.prototype.getBackgroundColor = function () {
        return this.mBgColor;
    };
    Camera.prototype.setBackgroundColor = function (color) {
        this.mBgColor = color;
    };
    Camera.prototype.setWidth = function (width) {
        this.mwcWidth = width;
    };
    Camera.prototype.getViewProjectionMatrix = function () {
        return this.mViewProjMatrix;
    };
    Camera.prototype.setUpViewMatrix = function () {
        mat4.lookAt(this.mViewMatrix, vec3.createFrom(this.mwcCenter[0], this.mwcCenter[1], 10), vec3.createFrom(this.mwcCenter[0], this.mwcCenter[1], 0), vec3.createFrom(0, 1, 0));
        console.log('the view matrix is init to: ');
        console.log(this.mViewMatrix);
    };
    Camera.prototype.setUpProjectionMatrix = function () {
        var halfWidth = this.mwcWidth * 0.5;
        var halfHeight = halfWidth * (this.viewPort[3] / this.viewPort[2]);
        console.log('half height = ' + halfHeight);
        mat4.ortho(-1 * halfWidth, halfWidth, -1 * halfHeight, halfHeight, this.nearPlane, this.farPlane, this.mProjMatrix);
        console.log('the projection matrix is init to');
        console.log(this.mProjMatrix);
    };
    Camera.prototype.calculateAndSetViewProjectionMatrix = function () {
        mat4.multiply(this.mProjMatrix, this.mViewMatrix, this.mViewProjMatrix);
    };
    Camera.prototype.setupViewProjection = function () {
        // Set up the view port.
        var gl = GameEngine.Core.getGL();
        gl.viewport(this.viewPort[0], this.viewPort[1], this.viewPort[2], this.viewPort[3]);
        gl.scissor(this.viewPort[0], this.viewPort[1], this.viewPort[2], this.viewPort[3]);
        gl.enable(gl.SCISSOR_TEST);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.disable(gl.SCISSOR_TEST);
        gl.clearColor(this.mBgColor[0], this.mBgColor[1], this.mBgColor[2], this.mBgColor[3]);
        this.setUpViewMatrix();
        this.setUpProjectionMatrix();
        this.calculateAndSetViewProjectionMatrix();
    };
    return Camera;
})();
//# sourceMappingURL=Camera.js.map