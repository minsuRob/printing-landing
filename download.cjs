const https = require('https');
const fs = require('fs');

const file = fs.createWriteStream("c:/Users/user/Documents/workspace/printing-landing/src/pages/TshirtPrintingDetail.html");
https.get("https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzc4M2EwNDBhZTcwZjQ2MWFhNjkyYTA3M2M3NDI3OTgwEgsSBxCd5J-ZoAoYAZIBIgoKcHJvamVjdF9pZBIUQhI3NTA2NDE2NTU1OTc2NzI5OTA&filename=&opi=96797242", function(response) {
  response.pipe(file);
});
