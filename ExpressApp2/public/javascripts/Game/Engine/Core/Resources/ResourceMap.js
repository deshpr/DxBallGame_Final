var ResourceMap;
(function (ResourceMap) {
    var MapEntry = (function () {
        function MapEntry(resourceName) {
            this.asset = resourceName;
        }
        return MapEntry;
    })();
    var resourceMap = {};
    var numOutstandingLoads = 0;
    var mLoadCompleteCallback = null; // Callback when all textures have been loaded.
    function checkIfAllResourcesHaveBeenLoaded() {
        if (numOutstandingLoads == 0 && mLoadCompleteCallback != null) {
            var toCall = mLoadCompleteCallback;
            mLoadCompleteCallback = null;
            toCall();
        }
    }
    function isAssetLoaded(resourceName) {
        // returns true if either the load has been requested,
        // or the resource has been loaded successfully.
        return resourceName in resourceMap;
    }
    function asyncLoadRequested(resourceName) {
        if (!isAssetLoaded(resourceName)) {
            resourceMap[resourceName] = new MapEntry(resourceName);
            ++numOutstandingLoads;
        }
    }
    ResourceMap.asyncLoadRequested = asyncLoadRequested;
    function asyncLoadCompleted(resourceName, loadedAsset) {
        if (resourceName in resourceMap) {
            resourceMap[resourceName].assetName = loadedAsset;
            --numOutstandingLoads;
            checkIfAllResourcesHaveBeenLoaded();
        }
    }
    ResourceMap.asyncLoadCompleted = asyncLoadCompleted;
    function setLoadCompleteCallback(callBack) {
        mLoadCompleteCallback = callBack;
        checkIfAllResourcesHaveBeenLoaded();
    }
    ResourceMap.setLoadCompleteCallback = setLoadCompleteCallback;
    function retrieveAsset(resourceName) {
        if (resourceName in resourceMap) {
            return resourceMap[resourceName].asset;
        }
        return null;
    }
    ResourceMap.retrieveAsset = retrieveAsset;
})(ResourceMap || (ResourceMap = {}));
//# sourceMappingURL=ResourceMap.js.map