import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
      <div>
        <Head>
          <title>Frontend SSR template</title>
          <meta name="description" content="Frontend SSR template is used for bootstrapping a project."/>
        </Head>
        <button onClick={() => {
          setTimeout(() => {
            console.log('clicked');
          }, 2000);
        }}>{t('click')}</button>
        <h1>Frontend SSR template</h1>
      </div>
  );
}
