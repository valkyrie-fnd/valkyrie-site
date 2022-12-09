import { LetsBegin } from '@site/src/components/LetsBegin';
import Layout from '@theme/Layout'
import React from 'react'
import WhatIs from './_what-is.mdx';
import ThePoint from './_the-point.mdx';
import styles from './about-us.module.css';
import MDXContent from '@theme/MDXContent';

export default function AboutUs() {
  return (
    <Layout>
      <main className={`container  ${styles.mainAbout}`} >
        <div className={styles.paragraphWrapper}>
          <h1 className={`${styles.header}`}>
            About us
          </h1>
          <article className={styles.container}>
            <MDXContent >
              <WhatIs className={styles.container} />
            </MDXContent>
          </article>
        </div>
        <img className={styles.image} src="img/casino.png" />
        <div className={styles.paragraphWrapper}>
          <article className={`${styles.container}`}>
            <MDXContent>
              <ThePoint />
            </MDXContent>
          </article>
          <LetsBegin></LetsBegin>
        </div>
      </main>
    </Layout>
  )
}