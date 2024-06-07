const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

const scripts = [
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/stone-textures-slider/assets/js/lightbeans-textures-popup.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/stone-textures-slider/assets/js/slider-init-stone-textures.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/stones-slider/assets/js/3rd-party/glightbox.min.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/story-slider/assets/js/story-slider.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/team-image-selector/assets/js/block.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/team-member-cards/assets/js/team-slider-init.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/testimonials/assets/js/flickity.pkgd.min.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/testimonials-cards/assets/js/testimonial-slider-init.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/testimonials-cards/assets/js/3rd-party/slick.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/testimonials-cards/assets/js/3rd-party/slick.min.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/thought-leadership-cards/assets/js/tl-slider-init.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/video-card/assets/js/lity.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/video-card/assets/js/init-inline-youtube-embed.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/video-card/assets/js/init-inline-vimeo-embed.js',
];

const styles = [
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/stone-textures-slider/assets/css/stone-textures-slider-styles.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/stones-slider/assets/css/3rd-party/glightbox.min.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/story-slider/assets/css/3rd-party/slick-theme.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/story-slider/assets/css/3rd-party/slick.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/team-image-selector/assets/css/block.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/team-member-cards/assets/css/block.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/team-member-cards/assets/css/block_editor_style.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/team-member-cards/assets/css/3rd-party/slick-theme.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/team-member-cards/assets/css/3rd-party/slick.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/testimonials/assets/css/block.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/testimonials/assets/css/flickity.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/testimonials-cards/assets/css/3rd-party/slick-theme.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/testimonials-cards/assets/css/3rd-party/slick.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/thought-leadership-cards/assets/css/block.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/thought-leadership-cards/assets/css/block_editor_style.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/thought-leadership-cards/assets/css/3rd-party/slick-theme.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/thought-leadership-cards/assets/css/3rd-party/slick.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/video-card/assets/css/block.css',
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
        '/wp-content/plugins/if-blocks-main/'
      )[1];
      const filePath = path.join(publicDir, scriptPath);
      await fetchAndSave(scriptUrl, filePath);
    }

    for (const styleUrl of styles) {
      const stylePath = new URL(styleUrl).pathname.split(
        '/wp-content/plugins/if-blocks-main/'
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
