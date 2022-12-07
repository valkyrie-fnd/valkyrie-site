import React from 'react'
import styles from './valk-logo.module.css';
export function ValkLogo() {
  return (
    <div className={styles.logoWrapper}>
      <img src="img/Valkyrie-Logo-full.svg" className={styles.valkyrie} />
    </div>
  )
}