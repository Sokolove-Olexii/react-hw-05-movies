import { useState, useEffect } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { searchMovies, getTopRated } from "../../api/tmdb";
import { Container } from "../../components/Container/Container";
import styles from "./Movies.module.scss";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;
    searchMovies(query).then(setMovies);
  }, [query]);

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const topRatedMovies = await getTopRated();
        setTopRated(topRatedMovies);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopRated();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.query.value;
    if (value.trim() === "") return;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <Container>
      <div className={styles.MoviesContainer}>
        <form onSubmit={handleSubmit} className={styles.SearchForm}>
          <input
            type="text"
            name="query"
            className={styles.SearchForm_input}
            placeholder="Search movies..."
          />
          <button type="submit" className={styles.SearchForm_button}>
            Search
          </button>
        </form>
        {loading && <p>Loading...</p>}
        {query ? (
          <div className={styles.MoviesPositionContainer}>
            <p className={styles.MoviesPositionContainer_title}>
              Search results for "{query}"
            </p>
            <ul className={styles.MoviesList}>
              {movies.map((movie) => (
                <li key={movie.id}>
                  <Link
                    to={`${movie.id}`}
                    state={{ from: location }}
                    className={styles.MoviesList_link}
                  >
                    {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={styles.MoviesPositionContainer}>
            <p className={styles.MoviesPositionContainer_title}>
              Top Rated Movies
            </p>
            <ul className={styles.MoviesList}>
              {topRated.map((movie) => (
                <li key={movie.id}>
                  <Link
                    to={`${movie.id}`}
                    state={{ from: location }}
                    className={styles.MoviesList_link}
                  >
                    {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Movies;
