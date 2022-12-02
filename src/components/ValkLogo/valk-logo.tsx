import React from 'react'
import styles from './valk-logo.module.css';
export function ValkLogo() {
  return (
    <div className={styles.logoWrapper}>
      <img src="img/Valkyrie-green.svg" className={styles.valkyrie} />
      <img src="/img/Valkyrie-logo-green.svg" className={`${styles.valkyrie} ${styles.logo}`} />
    </div>
  )
}