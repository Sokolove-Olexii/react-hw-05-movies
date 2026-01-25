import { Container } from "../Container/Container";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <section className={styles.Header}>
        <ul className={styles.HeaderList}>
          <li className={styles.HeaderList_li}>
            <Link to="/react-hw-05-movies" className={styles.HeaderList_link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" className={styles.HeaderList_link}>
              Movies
            </Link>
          </li>
        </ul>
      </section>
    </Container>
  );
}

export default Header;
