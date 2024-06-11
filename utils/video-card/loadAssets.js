const cssFiles = ['./blocks/video-card/assets/css/block.css'];

const jsFiles = [
  './blocks/video-card/assets/js/lity.js',
  './blocks/video-card/assets/js/init-inline-youtube-embed.js',
  './blocks/video-card/assets/js/init-inline-vimeo-embed.js',
];

const createScriptElement = (src) => {
  const script = document.createElement('script');
  script.src = src;
  return script;
};

const createLinkElement = (href) => {
  const link = document.createElement('link');
  link.href = href;
  link.rel = 'stylesheet';
  return link;
};

export const loadVideoCardAssets = () => {
  cssFiles.forEach((href) => {
    const link = createLinkElement(href);
    document.head.appendChild(link);
  });

  jsFiles.forEach((src) => {
    const script = createScriptElement(src);
    document.body.append(script);
  });
};
