function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var folderId = "1DBQZK__1IBp1z9MWsCuIeFekvyA4I4Ng";
    var folder = DriveApp.getFolderById(folderId);
    
    var decodedBlob = Utilities.newBlob(
      Utilities.base64Decode(data.fileContent), 
      data.mimeType, 
      data.fileName
    );
    
    var file = folder.createFile(decodedBlob);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success", "fileUrl": file.getUrl() }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
