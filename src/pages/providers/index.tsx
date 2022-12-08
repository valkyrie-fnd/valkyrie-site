import React from 'react';
import Layout from '@theme/Layout';
import styles from './provider.module.css';
import { usePluginData } from '@docusaurus/useGlobalData';
import { TileSearch, TileItem } from '@site/src/components/TileSearch';


export default function Providers() {
  const { providers } = usePluginData('provider-data-plugin', 'provider-data-plugin') as { providers: TileItem[] };
  console.log(providers);

  return (
    <Layout>
      <main>
        <div className={`container ${styles.mainPage}`}>
          <div className={styles.left}>
            <h1 className={`${styles.header}`}>Game provider</h1>
            <div>
              Discover game providers you can unlock by using Valkyrie as you open source aggregator.
              All providers listed have implemented modules in valkyrie enabling you as a operator to integrate with minimal coding efforts.
              All you need is agreements with the provider and setup your valkyrie instance to make all the games available.
            </div>
          </div>
          <div className={styles.right}>
            <TileSearch items={providers} label="Search Provider" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
