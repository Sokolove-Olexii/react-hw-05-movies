import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../api/tmdb";
import { Link, useLocation } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import styles from "./Home.module.scss";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  return (
    <Container>
      <div className={styles.Home}>
        <h1 className={styles.Home_title}>Trending today</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className={styles.HomeList}>
            {movies.map((movie) => (
              <li key={movie.id} className={styles.HomeList_li}>
                <Link
                  to={`movies/${movie.id}`}
                  state={{ from: location }}
                  className={styles.HomeList_link}
                >
                  {movie.title || movie.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
};

export default Home;
