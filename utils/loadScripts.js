const jsFiles = ['./js/if-accordion-init.js', './js/accordion.js'];

const createScriptElement = (src) => {
  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  return script;
};

export const loadScripts = () => {
  jsFiles.forEach((file) => {
    const script = createScriptElement(file);
    document.body.appendChild(script);
  });
};
