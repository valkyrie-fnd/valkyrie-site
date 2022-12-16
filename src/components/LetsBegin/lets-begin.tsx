import React from 'react';
import styles from './lets-begin.module.css';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ValkButton } from '../ValkButton';

export function LetsBegin() {
  return (
    <div className={`${styles.letsBegin}`}>
      <h2 className={`${styles.item}`}>Let's Begin!</h2>
      <div className={`${styles.buttonWrapper} ${styles.item}`}>
        <ValkButton startIcon={<GridViewRoundedIcon />} href="/providers">
          Game Providers
        </ValkButton>
        <ValkButton startIcon={<AssignmentIcon />} href="/docs">
          Documentation
        </ValkButton>
        <ValkButton startIcon={<WalletRoundedIcon />} href="/docs/wallet/valkyrie-pam-api">
          Wallet
        </ValkButton>
      </div>
    </div >)
}