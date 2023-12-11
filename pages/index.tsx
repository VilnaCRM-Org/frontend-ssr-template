import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  const click = () => {
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log('done');
    }, 2000);
  };

  return (
    <div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={click}>{t('hello')}</button>
    </div>
  );
}
