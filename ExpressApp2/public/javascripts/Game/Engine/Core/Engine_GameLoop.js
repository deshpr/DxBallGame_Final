var GameEngine;
(function (GameEngine) {
    var GameLoop;
    (function (GameLoop) {
        var kFPS = 60;
        var kMPF = 1000 / kFPS;
        var mPreviousTime;
        var mElapsedTime;
        var mCurrentTime;
        var mLagTime;
        var currentGame;
        var mIsLoopRunning;
        // define the game loop
        function update() {
        }
        function draw() {
        }
        function start(gameInstance) {
            mPreviousTime = Date.now();
            mLagTime = 0.0;
            mIsLoopRunning = true;
            currentGame = gameInstance;
            requestAnimationFrame(function () {
                runLoop();
            });
        }
        GameLoop.start = start;
        function runLoop() {
            if (mIsLoopRunning) {
                // Step A: Set up the call for the next animation frame.
                requestAnimationFrame(function () {
                    runLoop();
                });
                // Step B: compute elapsed time since last loop was executed
                mCurrentTime = Date.now();
                mElapsedTime = mCurrentTime - mPreviousTime;
                mPreviousTime = mCurrentTime;
                mLagTime += mElapsedTime;
                if (mLagTime >= kMPF) {
                    currentGame.update();
                    mLagTime -= kMPF; // catch up...
                }
                currentGame.draw();
            }
        }
    })(GameLoop = GameEngine.GameLoop || (GameEngine.GameLoop = {}));
})(GameEngine || (GameEngine = {}));
//# sourceMappingURL=Engine_GameLoop.js.map