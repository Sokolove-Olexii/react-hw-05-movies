import { Container } from "./components/Container/Container.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Header />

      <Routes>
        <Route path="/react-hw-05-movies" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
