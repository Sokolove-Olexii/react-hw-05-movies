const API_KEY = "9f0ccef62af2a18ba46ca6a861cd70b0";

const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`;

const Home = () => {
  fetch(url).then();
  return (
    <div>
      <h1>Trending today</h1>
    </div>
  );
};

export default Home;
