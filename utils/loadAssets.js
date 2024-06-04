const loadScriptContent = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch script: ${url}`);
    const scriptContent = await response.text();
    const script = document.createElement('script');
    script.textContent = scriptContent;
    document.body.appendChild(script);
  } catch (error) {
    console.error(error);
  }
};

const loadStyleContent = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch style: ${url}`);
    const styleContent = await response.text();
    const style = document.createElement('style');
    style.textContent = styleContent;
    document.head.appendChild(style);
  } catch (error) {
    console.error(error);
  }
};

const scripts = [
  'https://code.jquery.com/jquery-3.7.1.min.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/accordion/assets/js/if-accordion-init.js',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/accordion/assets/js/3rd-party/accordion.js',
];

const styles = [
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-blocks-main/blocks/accordion/assets/css/block.css',
  'https://bpiffaust52.wpenginepowered.com/wp-content/plugins/if-styles-core-1/assets/css/core-blocks/_block_core-accordion.scss',
];

const loadAssets = async () => {
  try {
    await Promise.all(scripts.map((src) => loadScript(src)));
    await Promise.all(styles.map((href) => loadStyle(href)));
    console.log('All assets loaded successfully');
  } catch (error) {
    console.error('Error loading assets:', error);
  }
};

loadAssets();
