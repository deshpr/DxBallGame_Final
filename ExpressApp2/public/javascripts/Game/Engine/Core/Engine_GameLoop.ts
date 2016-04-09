module GameEngine.GameLoop {
    
    var kFPS: number = 60;
    var kMPF: number = 1000 / kFPS;

    var mPreviousTime: number;
    var mElapsedTime: number;
    var mCurrentTime: number;
    var mLagTime: number;
    var currentGame: any;

    var mIsLoopRunning: boolean;
    

    // define the game loop

    function update(): void {
    }

    function draw(): void {

    }

    export function start(gameInstance:any): void {
        mPreviousTime = Date.now();
        mLagTime = 0.0;
        mIsLoopRunning = true;
        currentGame = gameInstance;
        requestAnimationFrame(function () {
            runLoop();
        });

    }
    

    function runLoop(): void {
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

            if ( mLagTime >= kMPF) {
                 currentGame.update();
                mLagTime -= kMPF; // catch up...
            }
           currentGame.draw();
        }
    }
    
}