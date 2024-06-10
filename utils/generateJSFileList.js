// generateJsFileList.js
const fs = require('fs');
const path = require('path');

const jsDirectory = path.join(__dirname, '../public/blocks');
const jsFiles = [];

const getJsFiles = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      getJsFiles(fullPath);
    } else if (fullPath.endsWith('.js')) {
      // Extract the relative path from the full path and replace backslashes with forward slashes
      const relativePath = path
        .relative(jsDirectory, fullPath)
        .replace(/\\/g, '/');
      jsFiles.push(`blocks/${relativePath}`);
    }
  });
};

getJsFiles(jsDirectory);

fs.writeFileSync('jsFiles.json', JSON.stringify(jsFiles, null, 2), 'utf-8');

console.log('JS file list generated: jsFiles.json');
