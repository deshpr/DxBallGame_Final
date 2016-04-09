module FileTypes {
   export const TextFileType = 0;
   export const XmlFileType = 1;
}

interface FileLoader {
    
    // define the supported types of files that can be loaded/.
    // Object.freeze ensures that no additional properties can be 
    // added to the object.
 
    loadResource(
        fileName: string,
        fileType: number,
        callBackFunction: Function);

}