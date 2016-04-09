module GameEngine.Core {


    var mGl: WebGLRenderingContext;
    var gl: WebGLRenderingContext;
    var canvas: HTMLCanvasElement;

    export function clearCanvas(color: any) {
        gl.clearColor(color[0], color[1], color[2], color[3]);
        gl.clear(mGl.COLOR_BUFFER_BIT);

    }

    
    export  function getGL(){
        return gl;
    }
    
  /*   function initializeWebGLCore(htmlCanvasId: string) {

        var result: boolean = initializeWebGL(htmlCanvasId);
        if (result) {
            GameEngine.VertexBuffer.initializeBuffer();
            GameEngine.GameInput.initialize();
        }
    }
    */
    
    export function initializeWebGL(canvasId: string) {
        var canvas = <HTMLCanvasElement>document.getElementById(canvasId);
        this.canvas = canvas;
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
       
        if (gl != null) {
            gl.clearColor(0.1, 0.6, 0.5, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            console.log('initialized the mgl');
            mGl = gl;
            GameEngine.VertexBuffer.initializeBuffer();
        //    GameEngine.GameInput.initialize();
//            return true;
        } else {
            document.write("<b>Web GL not supported</b>")
  //          return false;
        }       
    }
}