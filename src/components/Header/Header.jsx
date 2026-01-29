import { Container } from "../Container/Container";
import styles from "./Header.module.scss";
import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

function Header() {
  return (
    <>
      <header className={styles.Header}>
        <ul className={styles.HeaderList}>
          <li className={styles.HeaderList_li}>
            <Link to="/react-hw-05-movies" className={styles.HeaderList_link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="movies" className={styles.HeaderList_link}>
              Movies
            </Link>
          </li>
        </ul>
      </header>

      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Header;
