const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

const scripts = [
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-core-main/blocks/accordion/assets/js/if-accordion-init.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-core-main/blocks/masonry-gallery/assets/js/masonry-gallery-js.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-core-main/blocks/static-cards/assets/js/slider-init-static-cards.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-core-main/blocks/video-card/assets/js/init-inline-vimeo-embed.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-core-main/blocks/video-card/assets/js/init-inline-youtube-embed.js',
];

const styles = [
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-core-main/blocks/accordion/assets/css/block.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-core-main/blocks/facet-cards/assets/css/facet-cards.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-core-main/blocks/masonry-gallery/assets/css/masonry-cards.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-core-main/blocks/static-cards/assets/css/static-cards-styles.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-core-main/blocks/video-card/assets/css/block.css',
];

const projectRoot = path.resolve(__dirname, '..');

const fetchAndSave = async (url, filePath) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch: ${url}`);
  const content = await response.text();
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf-8');
};

const main = async () => {
  try {
    const publicDir = path.join(projectRoot, 'public');

    for (const scriptUrl of scripts) {
      const scriptPath = new URL(scriptUrl).pathname.split(
        '/wp-content/plugins/if-blocks-core-main/'
      )[1];
      const filePath = path.join(publicDir, scriptPath);
      await fetchAndSave(scriptUrl, filePath);
    }

    for (const styleUrl of styles) {
      const stylePath = new URL(styleUrl).pathname.split(
        '/wp-content/plugins/if-blocks-core-main/'
      )[1];
      const filePath = path.join(publicDir, stylePath);
      await fetchAndSave(styleUrl, filePath);
    }

    console.log('Assets fetched and saved successfully in public folder');
  } catch (error) {
    console.error('Error fetching assets:', error);
  }
};

main();
