import { useState, useEffect, act } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb";
import { Container } from "../Container/Container";
import styles from "./Actors.module.scss";

const Actors = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const cast = await getMovieCredits(movieId);
        setActors(cast);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchActors();
  }, [movieId]);
  return (
    <Container>
      <div className={styles.Actors}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className={styles.ActorsList}>
            {actors.length > 0 ? (
              actors.map((actor) => (
                <li key={actor.id} className={styles.ActorsList_li}>
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                        : "https://via.placeholder.com/200x300?text=No+Image"
                    }
                    alt={actor.name}
                    className={styles.ActorsList_img}
                  />
                  <div className={styles.ActorsList_characterPos}>
                    <p className={styles.ActorsList_name}>{actor.name}</p>
                    <p>Character: {actor.character}</p>
                  </div>
                </li>
              ))
            ) : (
              <p>We don't have any information</p>
            )}
          </ul>
        )}
      </div>
    </Container>
  );
};

export default Actors;
