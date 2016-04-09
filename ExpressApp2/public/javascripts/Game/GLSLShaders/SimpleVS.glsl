attribute vec3 aSquareVertexPosition;
uniform mat4 uModelTransform;
uniform mat4 uViewProjectionTransform;

void main(void){        
    gl_Position = uViewProjectionTransform * uModelTransform * vec4(aSquareVertexPosition, 1.0);
}