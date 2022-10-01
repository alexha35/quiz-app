import { Header } from '@quiz-app/ui-components';
import type { NextPage } from 'next';

import styles from '../styles/home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <a className={styles.cta} href={'/room/123'}>
          JOIN A ROOM
        </a>
      </div>
    </>
  );
};

export default Home;
``;
