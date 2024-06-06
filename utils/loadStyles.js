const cssFiles = ['./css/block.css', './css/main.css'];

const createLinkElement = (href) => {
  const link = document.createElement('link');
  link.href = href;
  link.rel = 'stylesheet';
  return link;
};

export const loadStyles = () => {
  cssFiles.forEach((href) => {
    const link = createLinkElement(href);
    document.head.appendChild(link);
  });
};
