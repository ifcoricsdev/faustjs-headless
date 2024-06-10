const createLinkElement = (href) => {
  const link = document.createElement('link');
  link.href = href;
  link.rel = 'stylesheet';
  return link;
};

export const loadStyles = async () => {
  try {
    const response = await fetch('../cssFiles.json');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const cssFiles = await response.json();

    cssFiles.forEach((href) => {
      const link = createLinkElement(href);
      document.head.appendChild(link);
    });
  } catch (error) {
    console.error('Failed to load CSS files:', error);
  }
};
