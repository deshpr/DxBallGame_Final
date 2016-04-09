var VertexSquareBuffer;
(function (VertexSquareBuffer) {
    function initSquareBuffer(gl) {
        // define the vertices for the  square.
        var verticesOfSquare = [
            0.5, 0.5, 0,
            -0.5, 0.5, 0,
            0.5, -0.5, 0,
            -0.5, -0.5, 0
        ];
        // Create the buffer in the webgl context.
        this.gSquareVertexBuffer = gl.createBuffer();
        var gGl = gl;
        gGl.bindBuffer(gGl.ARRAY_BUFFER, this.gSquareVertexBuffer);
        gGl.bufferData(gGl.ARRAY_BUFFER, new Float32Array(verticesOfSquare), gGl.STATIC_DRAW);
    }
    VertexSquareBuffer.initSquareBuffer = initSquareBuffer;
})(VertexSquareBuffer || (VertexSquareBuffer = {}));
//# sourceMappingURL=VertexSquareBuffer.js.map