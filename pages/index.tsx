import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t} = useTranslation();

  const click = () => {
    setTimeout(() => {
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
