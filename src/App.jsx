import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import { Container } from "./components/Container/Container.jsx";
import Header from "./components/Header/Header.jsx";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Movies = lazy(() => import("./pages/Movies/Movies.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));
const MovieDetails = lazy(
  () => import("./pages/MovieDetails/MovieDetails.jsx"),
);
const Actors = lazy(() => import("./components/Actors/Actors.jsx"));
const Reviews = lazy(() => import("./components/Reviews/Reviews.jsx"));

export const App = () => {
  return (
    <Routes>
      <Route path="/react-hw-05-movies" element={<Header />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="movies"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Movies />
            </Suspense>
          }
        />

        <Route
          path="movies/:movieId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route path="Cast" element={<Actors />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default App;
