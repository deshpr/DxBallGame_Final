 module ShaderSupport{

    export var gSimpleShader = null;   
    export var gShaderVertexPositionAttribute = null;
    /// Now configure the shader program.
    // A shader program combines both  the vertex and fragment shader, the data they contain
    //  and links them to the GPU.
    //  Define the shader program in the index.html script tag.
    // tHE SHADER  program is written in OpenGL Shading Language (GLSL).
    // Shaders are C-Like code that run in the GPU, and are responsible for manioulating the vertices

   

    export function initSimpleShader(vertexShaderId, fragmentShaderId, gl) {
            var vertexShader = this.loadAndCompileShader(vertexShaderId, gl.VERTEX_SHADER);
            var fragmentShader = this.loadAndCompileShader(fragmentShaderId, gl.FRAGMENT_SHADER);
            // create the shader program.
            var gl = gl;
            gSimpleShader = gl.createProgram()
            gl.attachShader(gSimpleShader, vertexShader);
            gl.attachShader(gSimpleShader, fragmentShader);
            gl.linkProgram(gSimpleShader);

            if (!gl.getProgramParameter(gSimpleShader, gl.LINK_STATUS)) {
                alert("Error linking the  shader!");
            }

            gShaderVertexPositionAttribute = gl.getAttribLocation(gSimpleShader, "aSquareVertexPosition")
            gl.bindBuffer(gl.ARRAY_BUFFER, VertexSquareBuffer.gSquareVertexBuffer);
            gl.vertexAttribPointer(gShaderVertexPositionAttribute,
                3,
                gl.FLOAT,
                false,
                0, 0);
            
        }

     export function  loadAndCompileShader(id, shaderType) {
            var shaderText, shaderSource, compileShader;
            // obtain the shader source from index.h tml
            shaderText = document.getElementById(id)
            shaderSource = shaderText.firstChild.textContent;
            var gl = GameEngine.Core.getGL();
            compileShader = gl.createShader(shaderType);
            // compile the created shader
            gl.shaderSource(compileShader, shaderSource)
            gl.compileShader(compileShader)

            if (!gl.getShaderParameter(compileShader,gl.COMPILE_STATUS)) {
                alert("A shader compiler error occurred " + gl.getShaderInfoLog(compileShader));
            }

            return compileShader;
        }

}
