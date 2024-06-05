import '../faust.config';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '@faustwp/core/dist/css/toolbar.css';
import '../styles/global.scss';

import Head from 'next/head';
import { loadStyles } from '../utils/loadStyles';
import { loadScripts } from '../utils/loadScripts';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    loadStyles();
    loadScripts();
  }, []);

  return (
    <FaustProvider pageProps={pageProps}>
      <Head>
        <script
          src='https://code.jquery.com/jquery-3.7.1.min.js'
          async
        ></script>
      </Head>
      <Component {...pageProps} key={router.asPath} />
    </FaustProvider>
  );
}
