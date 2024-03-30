const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../public/Jewelry');
const outputPath = path.join(__dirname, '../src/imageData.js');

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  const imageImports = files.map(file => `"/Jewelry/${file}"`);
  const fileContent = `export const images = [${imageImports.join(',\n')}];\n`;

  fs.writeFile(outputPath, fileContent, (err) => {
    if (err) throw err;
    console.log('ImageData.js has been saved!');
  });
});