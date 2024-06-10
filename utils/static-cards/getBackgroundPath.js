export const getBackgroundPath = () => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const posts = document.querySelectorAll(
      '.if-dynamic-card.card-type-post[data-post_type="post"]'
    );

    posts.forEach((post) => {
      const backgroundImage = post.style.backgroundImage;
      const newBackgroundImage = backgroundImage.replace(
        /url\(".*\/(blocks\/static-cards\/assets\/img\/.*)"\)/,
        'url("./$1")'
      );
      post.style.backgroundImage = newBackgroundImage;
    });
  }
};
