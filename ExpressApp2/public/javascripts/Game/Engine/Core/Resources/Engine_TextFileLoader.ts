class TextFileLoader implements FileLoader {
        
    private loadXmlFileType(): any {
            
    }

    private loadTextFileType(fileType: number, fileName: string, loadCallback: Function): any {

        ResourceMap.asyncLoadRequested(fileName);

        var req = new XMLHttpRequest();
        req.setRequestHeader('Content-Type', 'text/xml');
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status != 200) {
                alert('the resoruce was not loaded succesfully');
            }
        };
        var result: string;
        req.onload = function () {
            if (fileType == FileTypes.TextFileType) {
                result = req.responseText;
                ResourceMap.asyncLoadCompleted(fileName, result);
                if (loadCallback != null) {
                    loadCallback();
                }
            }

        }
    }
    
     loadResource(
        fileName: string,
        fileType:number, loadCallBack:Function) {

       //  ResourceMap.asyncLoadRequested(fileName);
         var asset: any = null;
         if (fileType == FileTypes.XmlFileType) {
             asset= this.loadXmlFileType();
         }
         else if (fileType == FileTypes.TextFileType) {
             asset = this.loadTextFileType();
         }
         ResourceMap.asyncLoadCompleted(fileName, asset);
         if (loadCallBack != null) {
             loadCallBack();
         }
    }
   
}