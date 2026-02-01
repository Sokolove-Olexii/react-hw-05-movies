import { useEffect, useState, useRef, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails } from "../../api/tmdb";
import { ToHomeScreen } from "../../components/ToHomeSceen/ToHomeScreen";
import { Container } from "../../components/Container/Container";
import styles from "./MovieDetails.module.scss";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // const location = useLocation();

  // const backLinkLocationRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  if (!movie) return null;

  return (
    <Container>
      {/* <Link to={backLinkLocationRef.current}>Go back</Link> */}
      <section className={styles.MovieDetails}>
        <div className={styles.MovieDetails_imgPos}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "default-img.jpg"
            }
            alt={movie.title}
            className={styles.MovieDetails_img}
          />
          <div className={styles.MovieDetails_position}>
            <h1 className={styles.MovieDetails_title}>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h1>
            <p className={styles.MovieDetails_scorePos}>
              User Score:
              <p className={styles.MovieDetails_score}>
                {Math.round(movie.vote_average * 10)}%
              </p>
            </p>
            <h3>Overview</h3>
            <p className={styles.MovieDetails_overview}>{movie.overview}</p>
            <h3>Genres</h3>
            <p className={styles.MovieDetails_genres}>
              {movie.genres.map((g) => g.name).join(", ")}
            </p>
          </div>
        </div>

        <div className={styles.MovieDetailsAddInf}>
          <h3>Additional information</h3>
          <ul className={styles.MovieDetailsAddInf_pos}>
            <li>
              <Link to="cast" className={styles.MovieDetailsAddInf_link}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" className={styles.MovieDetailsAddInf_link}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <ToHomeScreen />
      </section>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
