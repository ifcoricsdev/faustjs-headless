export const getBackgroundPath = () => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const posts = document.querySelectorAll(
      '.if-dynamic-card.card-type-post[data-post_type="post"]'
    );

    const ibfModal = document.querySelectorAll('.expertise-cards-icon > img');

    const eventCardsImages = document.querySelectorAll(
      '.events-cards-group .image img'
    );

    posts.forEach((post) => {
      const backgroundImage = post.style.backgroundImage;
      const newBackgroundImage = backgroundImage.replace(
        /url\(".*\/(blocks\/static-cards\/assets\/img\/.*)"\)/,
        'url("./$1")'
      );
      post.style.backgroundImage = newBackgroundImage;
    });

    ibfModal.forEach((modal) => {
      const backgroundSrc = modal.src;
      const newBackgroundSrc = backgroundSrc.replace(
        /\/wp-content\/plugins\//,
        '/'
      );
      modal.src = newBackgroundSrc;
    });

    eventCardsImages.forEach((images) => {
      const backgroundSrc = images.src;
      const newBackgroundSrc = backgroundSrc.replace(
        /\/wp-content\/plugins\/if-blocks-main\//,
        '/'
      );
      images.src = newBackgroundSrc;
    });
  }
};
