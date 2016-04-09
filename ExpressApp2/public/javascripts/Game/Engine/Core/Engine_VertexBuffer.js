var GameEngine;
(function (GameEngine) {
    var VertexBuffer;
    (function (VertexBuffer) {
        // Mode 
        VertexBuffer.verticesOfSquare = [
            0.5, 0.5, 0,
            -0.5, 0.5, 0,
            0.5, -0.5, 0,
            -0.5, -0.5, 0
        ];
        function getGLVertexReference() {
            return this.gSquareVertexBuffer;
        }
        VertexBuffer.getGLVertexReference = getGLVertexReference;
        var gSquareVertexBuffer;
        function initializeBuffer() {
            // Create the buffer in the webgl context.
            var gl = GameEngine.Core.getGL();
            this.gSquareVertexBuffer = gl.createBuffer();
            var gGl = gl;
            gGl.bindBuffer(gGl.ARRAY_BUFFER, this.gSquareVertexBuffer);
            gGl.bufferData(gGl.ARRAY_BUFFER, new Float32Array(this.verticesOfSquare), gGl.STATIC_DRAW);
        }
        VertexBuffer.initializeBuffer = initializeBuffer;
    })(VertexBuffer = GameEngine.VertexBuffer || (GameEngine.VertexBuffer = {}));
})(GameEngine || (GameEngine = {}));
//# sourceMappingURL=Engine_VertexBuffer.js.map