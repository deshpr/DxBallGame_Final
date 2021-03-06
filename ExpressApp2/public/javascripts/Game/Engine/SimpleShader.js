var SimpleShader = (function () {
    function SimpleShader(vertexShaderPath, fragmentShaderPath) {
        //constructor(vertexShaderId: string, fragmentShaderId: string) {
        var gl = GameEngine.Core.getGL();
        var vertexShader = this.loadAndCompileShader(vertexShaderPath, gl.VERTEX_SHADER);
        var fragmentShader = this.loadAndCompileShader(fragmentShaderPath, gl.FRAGMENT_SHADER);
        // create the shader program.
        this.mCompiledShader = gl.createProgram();
        gl.attachShader(this.mCompiledShader, vertexShader);
        gl.attachShader(this.mCompiledShader, fragmentShader);
        gl.linkProgram(this.mCompiledShader);
        if (!gl.getProgramParameter(this.mCompiledShader, gl.LINK_STATUS)) {
            alert("Error linking the  shader!");
        }
        this.mShaderVertexPositionAttribute = gl.getAttribLocation(this.mCompiledShader, "aSquareVertexPosition");
        this.mModelTransform = gl.getUniformLocation(this.mCompiledShader, "uModelTransform");
        this.mViewProjectionTransform = gl.getUniformLocation(this.mCompiledShader, "uViewProjectionTransform");
        gl.bindBuffer(gl.ARRAY_BUFFER, GameEngine.VertexBuffer.getGLVertexReference());
        gl.vertexAttribPointer(this.mShaderVertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
        // obtain a reference to the mPixel attribute.
        this.mPixelColor = gl.getUniformLocation(this.mCompiledShader, "uPixelColor");
    }
    SimpleShader.prototype.activateShader = function (pixelColor, viewProjectionTransform) {
        var gl = GameEngine.Core.getGL();
        gl.useProgram(this.mCompiledShader);
        gl.uniformMatrix4fv(this.mViewProjectionTransform, false, viewProjectionTransform);
        gl.enableVertexAttribArray(this.mShaderVertexPositionAttribute);
        gl.uniform4fv(this.mPixelColor, pixelColor);
    };
    SimpleShader.prototype.activateViewProjectionMatrix = function (viewProjectionMatrixTransform) {
        var gl = GameEngine.Core.getGL();
        gl.uniformMatrix4fv(this.mViewProjectionTransform, false, viewProjectionMatrixTransform);
        console.log('loaded the object transform');
    };
    SimpleShader.prototype.getShader = function () {
        return this.mCompiledShader;
    };
    SimpleShader.prototype.loadObjectTransform = function (transformMatrix) {
        var gl = GameEngine.Core.getGL();
        gl.uniformMatrix4fv(this.mModelTransform, false, transformMatrix);
        console.log('loaded the object transform');
    };
    SimpleShader.prototype.loadMatrixTransform = function (matrixTransform) {
        var gl = GameEngine.Core.getGL();
        console.log('the final operator = ' + matrixTransform);
        gl.uniformMatrix4fv(this.mModelTransform, false, matrixTransform);
        console.log('the resulting operator = ' + this.mModelTransform);
    };
    SimpleShader.prototype.loadFromFile = function (filePath) {
        var req = new XMLHttpRequest();
        req.open('GET', filePath, false); // make it synchronous
        try {
            req.send();
        }
        catch (error) {
            alert('could not retrieve shader at the path = ' + filePath);
            return null;
        }
        return req.responseText;
    };
    SimpleShader.prototype.loadAndCompileShader = function (filePath, shaderType) {
        var shaderText, shaderSource, compileShader;
        // obtain the shader source from index.h tml
        //shaderText = document.getElementById(id)
        shaderSource = this.loadFromFile(filePath);
        alert('shader  code  =  ' + shaderSource);
        // shaderSource = shaderText.firstChild.textContent;
        var gl = GameEngine.Core.getGL();
        compileShader = gl.createShader(shaderType);
        // compile the created shader
        gl.shaderSource(compileShader, shaderSource);
        gl.compileShader(compileShader);
        if (!gl.getShaderParameter(compileShader, gl.COMPILE_STATUS)) {
            alert("A shader compiler error occurred " + gl.getShaderInfoLog(compileShader));
        }
        return compileShader;
    };
    return SimpleShader;
})();
//# sourceMappingURL=SimpleShader.js.map