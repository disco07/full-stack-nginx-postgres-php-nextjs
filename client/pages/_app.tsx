import Layout from '../components/header/Layout';
import { Router, useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React, { useEffect } from 'react';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => storePathValues, [router.asPath]);

  const storePathValues = () => {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    // Set the previous path as the value of the current path.
    const prevPath = storage.getItem('currentPath');
    storage.setItem('prevPath', prevPath);
    // Set the current path value by looking at the browser's location object.
    storage.setItem('currentPath', globalThis.location.pathname);
  };

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
