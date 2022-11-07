import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function MainPage() {
  const features = [
    {
      title: "What's this?",
      text: "The #1 open source venue for game providers and gaming operators to meet, greet and collaborate. For free!",
    },
    {
      title: "What's the point?",
      text: "Tired of aggregator platforms ripping you off for lousy service and lock-in contracts? Well, with a minimal effort - you can do it yourselves. For free!",
    },
    {
      title: "How to get started?",
      text: "Checkout the connected game providers - and join the community. Easy integrate and start gaming! Again... for free!",
    }
  ];
  return (
    <Layout >
      <main>
        <div className={`${styles.heroBanner} text--center section`} data-theme='dark'>
          <div className={styles.heroContent}>
            <h1>
              Valkyrie, open sourcing gaming
            </h1>
          </div>
        </div>
        <div className='container text--center'>
          <h2>Why Valkyrie?</h2>
        </div>
        <div className={`${styles.features} container text--center section`}>
          <h2>Features</h2>
          <div className="row">
            {features.map((f, idx) => (
              <div className="col" key={idx}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
