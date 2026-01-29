import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/tmdb";
import { Container } from "../Container/Container";
import styles from "./Reviews.module.scss";

const Reviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const filmReviews = await getMovieReviews(movieId);
        setReviews(filmReviews);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <Container>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.Reviews}>
            {reviews.length > 0 ? (
              <ul className={styles.ReviewsList}>
                {reviews.map((review) => (
                  <li key={review.id} className={styles.ReviewsList_li}>
                    <h3 className={styles.ReviewsList_title}>
                      Author: {review.author}
                    </h3>
                    <p className={styles.ReviewsList_content}>
                      {review.content}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>We don't have any reviews for this movie.</p>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Reviews;
