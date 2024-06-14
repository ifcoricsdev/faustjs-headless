import '../faust.config';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '@faustwp/core/dist/css/toolbar.css';
import '../styles/global.scss';

import Head from 'next/head';
import { loadVideoCardAssets } from '../utils/video-card/loadAssets';
import { loadAccordionAssets } from '../utils/accordion/loadAssets';
import { loadStaticCardsAssets } from '../utils/static-cards/loadAssets';
import { loadTestimonialCardsAssets } from '../utils/testimonial-cards/loadAssets';
import { loadStorySliderAssets } from '../utils/story-slider/loadAssets';

import { getBackgroundPath } from '../utils/static-cards/getBackgroundPath';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  getBackgroundPath();

  useEffect(() => {
    loadVideoCardAssets();
    loadAccordionAssets();
    loadStaticCardsAssets();
    // loadStorySliderAssets();
    // loadTestimonialCardsAssets();
  }, []);

  return (
    <FaustProvider pageProps={pageProps}>
      <Head>
        <link rel='stylesheet' href='./css/main.css' />
        <link rel='stylesheet' href='./styles.css' />
        <link rel='stylesheet' href='./css/3rd-party/slick.css' />
        <link rel='stylesheet' href='./css/3rd-party/slick-theme.css' />
        <link rel='stylesheet' href='./css/3rd-party/glightbox.min.css' />
        <script src='./js/jquery-3.7.1.min.js'></script>
        <script src='./js/3rd-party/slick.js'></script>
        <script src='./js/3rd-party/accordion.js'></script>
        <script src='./js/3rd-party/lity.js'></script>
        <script src='./js/3rd-party/glightbox.min.js'></script>
        <script src='./js/3rd-party/flickity.pkgd.min.js'></script>
      </Head>
      <Component {...pageProps} key={router.asPath} />
    </FaustProvider>
  );
}
