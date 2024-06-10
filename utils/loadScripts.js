const createScriptElement = (src) => {
  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  return script;
};

export const loadScripts = async () => {
  try {
    const response = await fetch('../jsFiles.json');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const jsFiles = await response.json();

    jsFiles.forEach((src) => {
      const script = createScriptElement(src);
      document.body.appendChild(script);
    });
  } catch (error) {
    console.error('Failed to load JS files:', error);
  }
};
