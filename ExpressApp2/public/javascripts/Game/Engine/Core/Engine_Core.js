var GameEngine;
(function (GameEngine) {
    var Core;
    (function (Core) {
        var mGl;
        var gl;
        var canvas;
        function clearCanvas(color) {
            gl.clearColor(color[0], color[1], color[2], color[3]);
            gl.clear(mGl.COLOR_BUFFER_BIT);
        }
        Core.clearCanvas = clearCanvas;
        function getGL() {
            return gl;
        }
        Core.getGL = getGL;
        /*   function initializeWebGLCore(htmlCanvasId: string) {
      
              var result: boolean = initializeWebGL(htmlCanvasId);
              if (result) {
                  GameEngine.VertexBuffer.initializeBuffer();
                  GameEngine.GameInput.initialize();
              }
          }
          */
        function initializeWebGL(canvasId) {
            var canvas = document.getElementById(canvasId);
            this.canvas = canvas;
            gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            if (gl != null) {
                gl.clearColor(0.1, 0.6, 0.5, 1.0);
                gl.clear(gl.COLOR_BUFFER_BIT);
                console.log('initialized the mgl');
                mGl = gl;
                GameEngine.VertexBuffer.initializeBuffer();
            }
            else {
                document.write("<b>Web GL not supported</b>");
            }
        }
        Core.initializeWebGL = initializeWebGL;
    })(Core = GameEngine.Core || (GameEngine.Core = {}));
})(GameEngine || (GameEngine = {}));
//# sourceMappingURL=Engine_Core.js.map