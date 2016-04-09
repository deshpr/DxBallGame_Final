var Transform = (function () {
    function Transform() {
        this.mPosition = vec2.createFrom(0, 0);
        this.mScale = vec2.createFrom(1, 1); // keep  as is.
        this.mRotationInRadians = 0.0;
    }
    Transform.prototype.setRotationInRadians = function (radians) {
        this.mRotationInRadians = radians;
        while (this.mRotationInRadians > 2 * Math.PI) {
            this.mRotationInRadians -= (2 * Math.PI);
        }
    };
    Transform.prototype.incXPosBy = function (incx) {
        var curX = this.getX();
        this.setPosition(curX + incx, this.getY());
    };
    Transform.prototype.incSizeBy = function (incSize) {
        var curSizeX = this.getSize()[0];
        var curSizeY = this.getSize()[1];
        this.setSize(curSizeX * incSize, curSizeY * incSize);
    };
    Transform.prototype.incRotationByDegree = function (degree) {
        this.setRotationInDegrees(this.getRotationInDegrees() + degree);
    };
    Transform.prototype.setX = function (x) {
        this.mPosition[0] = x;
    };
    Transform.prototype.setY = function (y) {
        this.mPosition[1] = y;
    };
    Transform.prototype.getX = function () {
        return this.mPosition[0];
    };
    Transform.prototype.getY = function () {
        return this.mPosition[1];
    };
    Transform.prototype.setHeight = function (height) {
        this.mScale[1] = height;
    };
    Transform.prototype.setWidth = function (width) {
        this.mScale[0] = width;
    };
    Transform.prototype.getWidth = function () {
        return this.mScale[0];
    };
    Transform.prototype.getHeight = function () {
        return this.mScale[1];
    };
    Transform.prototype.setRotationInDegrees = function (angle) {
        this.setRotationInRadians(angle * Math.PI / 180);
    };
    Transform.prototype.getRotationInDegrees = function () {
        return this.getRotationInRadians() * 180 / Math.PI;
    };
    Transform.prototype.setSize = function (width, height) {
        this.mScale = vec2.createFrom(width, height);
    };
    Transform.prototype.getSize = function () {
        return this.mScale;
    };
    Transform.prototype.setPosition = function (x, y) {
        this.mPosition = vec2.createFrom(x, y);
    };
    Transform.prototype.getRotationInRadians = function () {
        return this.mRotationInRadians;
    };
    Transform.prototype.getXForm = function () {
        var matrix = mat4.create();
        mat4.identity(matrix);
        //        mat4.translate(xform, vec3.createFrom(0.1, 0, 0), xform);
        mat4.translate(matrix, vec3.createFrom(this.getX(), this.getY(), 0.0), matrix);
        //     mat4.scale(xform, vec3.createFrom(1.1, 1.0, 0.0), xform);
        mat4.scale(matrix, vec3.createFrom(this.getWidth(), this.getHeight(), 1.0), matrix);
        //  mat4.rotateZ(xform, 1.5, xform);
        mat4.rotateZ(matrix, this.getRotationInRadians(), matrix);
        return matrix;
    };
    return Transform;
})();
//# sourceMappingURL=Transform.js.map