if (!document.getElementById('lightbeans-platform')) {
  var lightbeans_script = document.createElement('script');
  lightbeans_script.id = 'lightbeans-platform';
  lightbeans_script.type = 'text/javascript';
  lightbeans_script.async = true;
  lightbeans_script.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.lightbeans.com/js/t-platform/t-platform.min.js';
  document.body.appendChild(lightbeans_script);
} else {
  var lightbeans_platform_elem = document.getElementById('lightbeans-platform');
  var lightbeans_event = document.createEvent('Event');
  lightbeans_event.initEvent('__lb_reload_', true, true);
  lightbeans_platform_elem.dispatchEvent(lightbeans_event);
}

const domElement_block_634db53e0bc72_1 = document.getElementById("lightbox-block_634db53e0bc72-1");
domElement_block_634db53e0bc72_1.addEventListener('click', () => {
  const event = new CustomEvent("__lb_show_popup_", {
    detail: {
      texture: "/organizations/polycor-pavers/products/eastern-gray-granite-slab-1",
      lang: "en",
      bkgcolor: "default",
    }
  })
  document.body.dispatchEvent(event)
});
const domElement_block_634db53e0bc72_2 = document.getElementById("lightbox-block_634db53e0bc72-2");
domElement_block_634db53e0bc72_2.addEventListener('click', () => {
  const event = new CustomEvent("__lb_show_popup_", {
    detail: {
      texture: "/organizations/polycor-pavers/products/georgia-marble-slab-1",
      lang: "en",
      bkgcolor: "default",
    }
  })
  document.body.dispatchEvent(event)
});
const domElement_block_634db53e0bc72_3 = document.getElementById("lightbox-block_634db53e0bc72-3");
domElement_block_634db53e0bc72_3.addEventListener('click', () => {
  const event = new CustomEvent("__lb_show_popup_", {
    detail: {
      texture: "/organizations/polycor-pavers/products/georgia-marble-slab-2",
      lang: "en",
      bkgcolor: "default",
    }
  })
  document.body.dispatchEvent(event)
});
const domElement_block_634db53e0bc72_4 = document.getElementById("lightbox-block_634db53e0bc72-4");
domElement_block_634db53e0bc72_4.addEventListener('click', () => {
  const event = new CustomEvent("__lb_show_popup_", {
    detail: {
      texture: "/organizations/polycor-pavers/products/indiana-limestone-slab-1",
      lang: "en",
      bkgcolor: "default",
    }
  })
  document.body.dispatchEvent(event)
});
const domElement_block_634db53e0bc72_5 = document.getElementById("lightbox-block_634db53e0bc72-5");
domElement_block_634db53e0bc72_5.addEventListener('click', () => {
  const event = new CustomEvent("__lb_show_popup_", {
    detail: {
      texture: "/organizations/polycor-pavers/products/indiana-limestone-slab-2",
      lang: "en",
      bkgcolor: "default",
    }
  })
  document.body.dispatchEvent(event)
});
const domElement_block_634db53e0bc72_6 = document.getElementById("lightbox-block_634db53e0bc72-6");
domElement_block_634db53e0bc72_6.addEventListener('click', () => {
  const event = new CustomEvent("__lb_show_popup_", {
    detail: {
      texture: "/organizations/polycor-pavers/products/saint-henry-slab-1",
      lang: "en",
      bkgcolor: "default",
    }
  })
  document.body.dispatchEvent(event)
});
