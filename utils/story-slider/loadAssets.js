const cssFiles = [];

const jsFiles = ['./blocks/story-slider/assets/js/story-slider.js'];

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

export const loadStorySliderAssets = () => {
  cssFiles.forEach((href) => {
    const link = createLinkElement(href);
    document.head.appendChild(link);
  });

  jsFiles.forEach((src) => {
    const script = createScriptElement(src);
    document.body.append(script);
  });
};
