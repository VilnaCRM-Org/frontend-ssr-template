import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const {t} = useTranslation();

  const click = () => {
    setTimeout(() => {
      console.log('done');
    }, 2000);
  };

  return (
      <div>
        <Head>
          <html lang="en"/>
          <title>Frontend Ssr template</title>
          <meta name="description" content="Your description here"/>
        </Head>
        <button type='button' onClick={click}>{t('hello')}</button>
      </div>
  );
}
