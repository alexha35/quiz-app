import styles from './Header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <nav className={styles['container']}>
      <div className={styles['inner_container']}>
        <h1 className={styles['title']}>QUIZ APP</h1>
        <div className={styles['links']}>
          <a className={styles['link']}>Quiz</a>
          <a className={styles['link']}>Create</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
