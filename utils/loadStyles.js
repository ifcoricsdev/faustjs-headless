const createLinkElement = (href) => {
  const link = document.createElement('link');
  link.href = href;
  link.rel = 'stylesheet';
  return link;
};

export const loadStyles = async () => {
  try {
    // Fetch the JSON file containing the list of CSS files from the root directory
    const response = await fetch('../cssFiles.json');
    const cssFiles = await response.json();

    // Dynamically load each CSS file
    cssFiles.forEach((href) => {
      const link = createLinkElement(href);
      document.head.appendChild(link);
    });
  } catch (error) {
    console.error('Failed to load CSS files:', error);
  }
};
