import axios from "axios";

const API_KEY = "9f0ccef62af2a18ba46ca6a861cd70b0";
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`,
  );
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`,
  );
  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`,
  );
  return response.data.results;
};

export const getTopRated = async () => {
  const response = await axios.get(`/movie/top_rated?api_key=${API_KEY}`);
  return response.data.results;
};
