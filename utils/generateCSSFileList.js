// generateCssFileList.js
const fs = require('fs');
const path = require('path');

const cssDirectory = path.join(__dirname, '../public/blocks');
const cssFiles = [];

const getCssFiles = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      getCssFiles(fullPath);
    } else if (fullPath.endsWith('.css')) {
      // Extract the relative path from the full path and replace backslashes with forward slashes
      const relativePath = path
        .relative(cssDirectory, fullPath)
        .replace(/\\/g, '/');
      cssFiles.push(`blocks/${relativePath}`);
    }
  });
};

getCssFiles(cssDirectory);

fs.writeFileSync('cssFiles.json', JSON.stringify(cssFiles, null, 2), 'utf-8');

console.log('CSS file list generated: cssFiles.json');
