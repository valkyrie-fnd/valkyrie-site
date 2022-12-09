import React from 'react';
import Layout from '@theme/Layout';

import MDXContent from '@theme/MDXContent';
import styles from './provider.module.css';
import { usePluginData } from '@docusaurus/useGlobalData';
import { TileSearch, TileItem } from '@site/src/components/TileSearch';
import GameProviders from './_game-providers.mdx'


export default function Providers() {
  const { providers } = usePluginData('provider-data-plugin', 'provider-data-plugin') as { providers: TileItem[] };
  console.log(providers);

  return (
    <Layout>
      <main>
        <div className={`container ${styles.mainPage}`}>
          <div className={styles.left}>
            <h1 className={`${styles.header}`}>Game provider</h1>
            <MDXContent>
              <GameProviders />
            </MDXContent>
          </div>
          <div className={styles.right}>
            <TileSearch items={providers} label="Search Provider" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
