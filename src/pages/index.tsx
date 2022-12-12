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
    document.documentElement.classList.add('main-page');
    return () => { document.documentElement.classList.remove('main-page'); }
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
              Always Open Source and free to use, maintained by Valkyrie fnd. Read more about Valkyrie <Link href="./about-us">here</Link>
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
                href="/docs/gamelaunch/valkyrie-operator-api">
                Game Launcher
              </ValkButton>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
