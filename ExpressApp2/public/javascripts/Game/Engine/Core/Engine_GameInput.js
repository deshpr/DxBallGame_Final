var GameEngine;
(function (GameEngine) {
    var GameInput;
    (function (GameInput) {
        // Visit http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
        // for the entire list of keycodes.
        var KeyboardConstants = (function () {
            function KeyboardConstants() {
            }
            KeyboardConstants.Left = 37;
            KeyboardConstants.Up = 28;
            KeyboardConstants.Right = 39;
            KeyboardConstants.Down = 40;
            KeyboardConstants.Space = 42;
            return KeyboardConstants;
        })();
        GameInput.KeyboardConstants = KeyboardConstants;
        ;
        var lastKeyCode = 42;
        var mKeyPressed = [];
        var mKeyClicked = [];
        var mPreviousState = [];
        function _onKeyPressed(event) {
            mKeyPressed[event.keyCode] = true;
        }
        function _onKeyReleased(event) {
            mKeyPressed[event.keyCode] = false;
        }
        function isKeyClicked(keyCode) {
            return mKeyClicked[keyCode];
        }
        GameInput.isKeyClicked = isKeyClicked;
        function isKeyPressed(keyCode) {
            return mKeyPressed[keyCode];
        }
        GameInput.isKeyPressed = isKeyPressed;
        function initialize() {
            for (var i = 0; i < lastKeyCode; i++) {
                mKeyPressed[i] = false;
                mKeyClicked[i] = false;
                mPreviousState[i] = false;
            }
            window.addEventListener('keydown', _onKeyPressed);
            window.addEventListener('keyup', _onKeyReleased);
        }
        GameInput.initialize = initialize;
        function update() {
            for (var i = 0; i < lastKeyCode; i++) {
                mKeyClicked[i] = mPreviousState[i] && !mKeyPressed[i];
                mPreviousState[i] = mKeyPressed;
            }
        }
        GameInput.update = update;
    })(GameInput = GameEngine.GameInput || (GameEngine.GameInput = {}));
})(GameEngine || (GameEngine = {}));
//# sourceMappingURL=Engine_GameInput.js.map