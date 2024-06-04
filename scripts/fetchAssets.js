const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

const scripts = [
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/accordion/assets/js/if-accordion-init.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/accordion/assets/js/3rd-party/accordion.js',
];

const styles = [
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/accordion/assets/css/block.css',
];

const projectRoot = path.resolve(__dirname, '..');

const fetchAndSave = async (url, filePath) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch: ${url}`);
  const content = await response.text();
  fs.writeFileSync(filePath, content, 'utf-8');
};

const main = async () => {
  try {
    const publicDir = path.join(projectRoot, 'public');
    const jsDir = path.join(publicDir, 'js');
    const cssDir = path.join(publicDir, 'css');
    if (!fs.existsSync(jsDir)) fs.mkdirSync(jsDir, { recursive: true });
    if (!fs.existsSync(cssDir)) fs.mkdirSync(cssDir, { recursive: true });

    for (const scriptUrl of scripts) {
      const scriptName = path.basename(scriptUrl);
      await fetchAndSave(scriptUrl, path.join(jsDir, scriptName));
    }

    for (const styleUrl of styles) {
      const styleName = path.basename(styleUrl);
      await fetchAndSave(styleUrl, path.join(cssDir, styleName));
    }

    console.log('Assets fetched and saved successfully in public folder');
  } catch (error) {
    console.error('Error fetching assets:', error);
  }
};

main();
