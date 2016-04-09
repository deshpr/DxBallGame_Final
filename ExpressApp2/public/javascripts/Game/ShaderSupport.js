var ShaderSupport;
(function (ShaderSupport) {
    ShaderSupport.gSimpleShader = null;
    ShaderSupport.gShaderVertexPositionAttribute = null;
    /// Now configure the shader program.
    // A shader program combines both  the vertex and fragment shader, the data they contain
    //  and links them to the GPU.
    //  Define the shader program in the index.html script tag.
    // tHE SHADER  program is written in OpenGL Shading Language (GLSL).
    // Shaders are C-Like code that run in the GPU, and are responsible for manioulating the vertices
    function initSimpleShader(vertexShaderId, fragmentShaderId, gl) {
        var vertexShader = this.loadAndCompileShader(vertexShaderId, gl.VERTEX_SHADER);
        var fragmentShader = this.loadAndCompileShader(fragmentShaderId, gl.FRAGMENT_SHADER);
        // create the shader program.
        var gl = gl;
        ShaderSupport.gSimpleShader = gl.createProgram();
        gl.attachShader(ShaderSupport.gSimpleShader, vertexShader);
        gl.attachShader(ShaderSupport.gSimpleShader, fragmentShader);
        gl.linkProgram(ShaderSupport.gSimpleShader);
        if (!gl.getProgramParameter(ShaderSupport.gSimpleShader, gl.LINK_STATUS)) {
            alert("Error linking the  shader!");
        }
        ShaderSupport.gShaderVertexPositionAttribute = gl.getAttribLocation(ShaderSupport.gSimpleShader, "aSquareVertexPosition");
        gl.bindBuffer(gl.ARRAY_BUFFER, VertexSquareBuffer.gSquareVertexBuffer);
        gl.vertexAttribPointer(ShaderSupport.gShaderVertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
    }
    ShaderSupport.initSimpleShader = initSimpleShader;
    function loadAndCompileShader(id, shaderType) {
        var shaderText, shaderSource, compileShader;
        // obtain the shader source from index.h tml
        shaderText = document.getElementById(id);
        shaderSource = shaderText.firstChild.textContent;
        var gl = GameEngine.Core.getGL();
        compileShader = gl.createShader(shaderType);
        // compile the created shader
        gl.shaderSource(compileShader, shaderSource);
        gl.compileShader(compileShader);
        if (!gl.getShaderParameter(compileShader, gl.COMPILE_STATUS)) {
            alert("A shader compiler error occurred " + gl.getShaderInfoLog(compileShader));
        }
        return compileShader;
    }
    ShaderSupport.loadAndCompileShader = loadAndCompileShader;
})(ShaderSupport || (ShaderSupport = {}));
//# sourceMappingURL=ShaderSupport.js.map