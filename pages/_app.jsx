import '../styles/globals.css';
import React, { useEffect } from 'react';
import i18n from '../i18n';
import reportWebVitals from '../src/reportWebVitals';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, []);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

reportWebVitals();

export default MyApp;
