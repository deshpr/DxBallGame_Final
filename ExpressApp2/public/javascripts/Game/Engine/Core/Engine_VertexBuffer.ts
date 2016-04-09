module GameEngine.VertexBuffer {

    // Mode 
      export var verticesOfSquare = [
        0.5, 0.5, 0,
        -0.5, 0.5, 0,
        0.5, -0.5, 0,
        -0.5, -0.5, 0
    ]

      export function getGLVertexReference() {
          return this.gSquareVertexBuffer;
      }

       var gSquareVertexBuffer: any;

    export function initializeBuffer(){
        // Create the buffer in the webgl context.
        var gl = GameEngine.Core.getGL();
        this.gSquareVertexBuffer = gl.createBuffer();
        var gGl = gl;
        gGl.bindBuffer(gGl.ARRAY_BUFFER, this.gSquareVertexBuffer);
        gGl.bufferData(gGl.ARRAY_BUFFER, new Float32Array(this.verticesOfSquare), gGl.STATIC_DRAW);
    }
}