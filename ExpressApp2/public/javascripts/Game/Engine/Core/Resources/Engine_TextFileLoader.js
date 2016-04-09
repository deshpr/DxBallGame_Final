var TextFileLoader = (function () {
    function TextFileLoader() {
    }
    TextFileLoader.prototype.loadXmlFileType = function () {
    };
    TextFileLoader.prototype.loadTextFileType = function (fileType, fileName, loadCallback) {
        ResourceMap.asyncLoadRequested(fileName);
        var req = new XMLHttpRequest();
        req.setRequestHeader('Content-Type', 'text/xml');
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status != 200) {
                alert('the resoruce was not loaded succesfully');
            }
        };
        var result;
        req.onload = function () {
            if (fileType == FileTypes.TextFileType) {
                result = req.responseText;
                ResourceMap.asyncLoadCompleted(fileName, result);
                if (loadCallback != null) {
                    loadCallback();
                }
            }
        };
    };
    TextFileLoader.prototype.loadResource = function (fileName, fileType, loadCallBack) {
        ResourceMap.asyncLoadRequested(fileName);
        var asset = null;
        if (fileType == FileTypes.XmlFileType) {
            asset = this.loadXmlFileType();
        }
        else if (fileType == FileTypes.TextFileType) {
            asset = this.loadTextFileType();
        }
        ResourceMap.asyncLoadCompleted(fileName, asset);
        if (loadCallBack != null) {
            loadCallBack();
        }
    };
    return TextFileLoader;
})();
//# sourceMappingURL=Engine_TextFileLoader.js.map