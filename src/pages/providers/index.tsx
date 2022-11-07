import React from 'react';
import Layout from '@theme/Layout';
import styles from './provider.module.css';
import { usePluginData } from '@docusaurus/useGlobalData';
import TileSearch, { TileItem } from '@site/src/components/tile-search';


export default function Providers() {
  const { providers } = usePluginData('provider-data-plugin') as {providers: TileItem[]};
  console.log(providers);

  return (
    <Layout>
      <div className={`${styles.providers} text--center section`}>
        <h1>Available providers</h1>
      </div>
      <div className='container section'>
        <TileSearch items={providers} label="Search Provider" />
      </div>
    </Layout>
  );
}
