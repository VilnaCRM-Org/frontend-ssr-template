import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t} = useTranslation();

  const click = () => {
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log('done');
    }, 2000);
  };

  return (
      <div>
        <Head>
          <title>Frontend SSR template</title>
          <meta name="description" content="Frontend SSR template is used for bootstrapping a project."/>
        </Head>
        <button type='button' onClick={click}>{t('hello')}</button>
      </div>
  );
}
