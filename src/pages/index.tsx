import React, { useEffect } from 'react';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { ValkLogo } from '@site/src/components/ValkLogo';
import { ValkButton } from '@site/src/components/ValkButton';
import Link from '@docusaurus/Link';

export default function MainPage(props) {
  useEffect(() => {
    // Used to make transparent on this page
    document.body.classList.add('main-page');
    return () => { document.body.classList.remove('main-page'); }
  }, []);
  return (
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
              Always Open Source and free to use, maintained by Valkyrie Foundation. Read more about Valkyrie <Link href="./about-us">here</Link>
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
                href="/docs/wallet/valkyrie-pam-api">
                Wallets
              </ValkButton>
              <ValkButton
                className={styles.button}
                startIcon={<OpenInNewRoundedIcon />}
                href="/docs/gamelaunch/valkyrie-provider-endpoints">
                Game Launcher
              </ValkButton>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
