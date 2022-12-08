import React from 'react';
import styles from './lets-begin.module.css';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { ValkButton } from '../ValkButton';

export function LetsBegin() {
  return (
    <div className={`${styles.letsBegin}`}>
      <h2 className={`${styles.item}`}>Let's Begin!</h2>
      <div className={`${styles.buttonWrapper} ${styles.item}`}>
        <ValkButton startIcon={<GridViewRoundedIcon />} href="/providers">
          Game Providers
        </ValkButton>
        <ValkButton startIcon={<WalletRoundedIcon />} href="/docs/wallet/valkyrie-pam-api">
          Wallets
        </ValkButton>
        <ValkButton startIcon={<OpenInNewRoundedIcon />} href="/docs/gamelaunch/valkyrie-provider-endpoints">
          Game Launcher
        </ValkButton>
      </div>
    </div >)
}