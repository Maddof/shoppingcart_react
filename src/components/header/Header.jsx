import { Nav_main } from "./Nav_header";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={`${styles.mainHeader}`}>
      <h2>My Header</h2>
      <div className={styles.navWrapper}>
        <Nav_main />
      </div>
    </header>
  );
}

export default Header;
