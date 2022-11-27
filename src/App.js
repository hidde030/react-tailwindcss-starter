import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import Navbar from './components/Navbar';
import Scores from './pages/Scores';
import Footer from './components/Footer';
import Team from './pages/Team';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/score" exact element={<Scores />} />
        <Route path="/team" exact element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
