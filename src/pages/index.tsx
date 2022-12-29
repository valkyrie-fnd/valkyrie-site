import React from 'react';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { ValkLogo } from '@site/src/components/ValkLogo';
import { ValkButton } from '@site/src/components/ValkButton';
import Link from '@docusaurus/Link';
import { HtmlClassNameProvider } from '@docusaurus/theme-common';

export default function MainPage() {
  return (
    <HtmlClassNameProvider className='main-page'>
      <Layout >
        <main>
          <div className={`container ${styles.mainPage}`}>
            <div className={styles.left}>
              <ValkLogo />
            </div>
            <div className={styles.right}>
              <h1 className={styles.header}>
                An open source platform where Game providers and Gaming operators meet & collaborate
              </h1>
              <h3 className={styles.subHeader}>
                Open Source and free to use, maintained by Valkyrie fnd. Read more about Valkyrie <Link href="./about">here</Link>
              </h3>
              <div className={styles.buttons}>
                <ValkButton
                  className={styles.button}
                  startIcon={<GridViewRoundedIcon />}
                  href="/providers">
                  Game Providers
                </ValkButton>
                <ValkButton
                  className={styles.button}
                  startIcon={<WalletRoundedIcon />}
                  href="/docs/wallet/valkyrie-pam/valkyrie-pam-api">
                  Wallet
                </ValkButton>
                <ValkButton
                  className={styles.button}
                  startIcon={<AssignmentIcon />}
                  href="/docs">
                  Documentation
                </ValkButton>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </HtmlClassNameProvider>
  );
}
