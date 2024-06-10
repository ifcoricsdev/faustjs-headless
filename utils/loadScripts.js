const createScriptElement = (src) => {
  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  return script;
};

export const loadScripts = async () => {
  try {
    // Fetch the JSON file containing the list of JS files from the root directory
    const response = await fetch('../jsFiles.json');
    const jsFiles = await response.json();

    // Dynamically load each JS file
    jsFiles.forEach((file) => {
      const script = createScriptElement(file);
      document.body.appendChild(script);
    });
  } catch (error) {
    console.error('Failed to load JS files:', error);
  }
};
