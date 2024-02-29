import styles from './menu.module.css'
export function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
        <li>Search</li>
      </ul>
    </nav>
  );
}
