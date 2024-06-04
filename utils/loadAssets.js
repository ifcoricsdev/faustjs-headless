import { createElement } from 'react';

// utils/loadAssets.js
const injectStylesAndScripts = () => {
  const jsFiles = [
    'https://code.jquery.com/jquery-3.7.1.min.js',
    './js/if-accordion-init.js',
    './js/accordion.js',
  ];

  const cssFiles = ['./css/style.css', './css/block.css'];

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

  cssFiles.forEach((file) => {
    const link = createLinkElement(file);
    document.head.appendChild(link);
  });

  jsFiles.forEach((file) => {
    const script = createScriptElement(file);
    document.body.appendChild(script);
  });
};

export default injectStylesAndScripts;
