const cssFiles = ['./blocks/accordion/assets/css/block.css'];

const jsFiles = ['./blocks/accordion/assets/js/if-accordion-init.js'];

const createLinkElement = (href) => {
  const link = document.createElement('link');
  link.href = href;
  link.rel = 'stylesheet';
  return link;
};

const createScriptElement = (src) => {
  const script = document.createElement('script');
  script.src = src;
  return script;
};

export const loadAccordionAssets = () => {
  cssFiles.forEach((href) => {
    const link = createLinkElement(href);
    document.head.appendChild(link);
  });

  jsFiles.forEach((src) => {
    const script = createScriptElement(src);
    document.body.append(script);
  });
};
