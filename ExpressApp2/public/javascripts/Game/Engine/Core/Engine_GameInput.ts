module GameEngine.GameInput {

    // Visit http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
    // for the entire list of keycodes.
    
       export class KeyboardConstants  {
                static  Left = 37;
                static  Up = 28;
                static  Right = 39;
                static  Down = 40;
                static  Space = 42;
        };
        var lastKeyCode: number = 42;
    
        var mKeyPressed = [];
        var mKeyClicked = [];
        var mPreviousState  = [];
    
        function _onKeyPressed(event: any) {
            mKeyPressed[event.keyCode] = true;
        }
        function _onKeyReleased(event: any) {
            mKeyPressed[event.keyCode] = false;
        }

        export function isKeyClicked(keyCode: number): boolean {
            return mKeyClicked[keyCode];
        }

        export function isKeyPressed(keyCode: number): boolean {
            return mKeyPressed[keyCode];
        }
        
        export function initialize() {
            for (var i = 0; i < lastKeyCode; i++) {
                mKeyPressed[i] = false;
                mKeyClicked[i] =  false;
                mPreviousState[i] = false;
            }
            window.addEventListener('keydown', _onKeyPressed);
            window.addEventListener('keyup', _onKeyReleased);
        }

        export function update() {
            for (var i = 0; i < lastKeyCode; i++) {
                mKeyClicked[i] = mPreviousState[i] && !mKeyPressed[i];
                mPreviousState[i] = mKeyPressed;
            }
        }
    
}