import styles from "./Header.module.scss";
import { Link } from "react-router";

function Header() {
  return (
    <section className={styles.Header}>
      <ul className={styles.HeaderList}>
        <li className={styles.HeaderList_li}>
          <Link className={styles.HeaderList_link}>Home</Link>
        </li>
        <li>
          <Link className={styles.HeaderList_link}>Movies</Link>
        </li>
      </ul>
    </section>
  );
}

export default Header;
