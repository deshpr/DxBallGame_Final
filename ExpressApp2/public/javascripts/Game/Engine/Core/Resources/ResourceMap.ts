module ResourceMap {


    class MapEntry {

       public asset: string;

        constructor(resourceName: string) {
            this.asset = resourceName;
        }
    }

    var resourceMap = {};
    var numOutstandingLoads = 0;
    var mLoadCompleteCallback = null;   // Callback when all textures have been loaded.

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
    
    

    export  function asyncLoadRequested(resourceName: string) {
         if (!isAssetLoaded(resourceName)) {
             resourceMap[resourceName] = new MapEntry(resourceName);
             ++numOutstandingLoads;
         }
     }

    export function asyncLoadCompleted(resourceName: string, loadedAsset:any) {
        if (resourceName in resourceMap) {
            resourceMap[resourceName].assetName = loadedAsset;
            --numOutstandingLoads;
            checkIfAllResourcesHaveBeenLoaded();
        }
    }

    export function setLoadCompleteCallback(callBack) {
        mLoadCompleteCallback = callBack;
        checkIfAllResourcesHaveBeenLoaded();
    } 

    export function retrieveAsset(resourceName) {
        if (resourceName in resourceMap) {
            return resourceMap[resourceName].asset;
        }
        return null;
    }
   
}