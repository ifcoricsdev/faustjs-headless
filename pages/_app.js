import '../faust.config';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '@faustwp/core/dist/css/toolbar.css';
import '../styles/global.scss';

import Head from 'next/head';
import { loadAccordionAssets } from '../utils/accordion/loadAssets';
import { loadStaticCardsAssets } from '../utils/static-cards/loadAssets';

import { getBackgroundPath } from '../utils/static-cards/getBackgroundPath';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  getBackgroundPath();

  useEffect(() => {
    loadAccordionAssets();
    loadStaticCardsAssets();
  }, []);

  return (
    <FaustProvider pageProps={pageProps}>
      <Head>
        <link rel='stylesheet' href='./css/main.css' />
        <script
          src='https://code.jquery.com/jquery-3.7.1.min.js'
          async
        ></script>
      </Head>
      <Component {...pageProps} key={router.asPath} />
    </FaustProvider>
  );
}
