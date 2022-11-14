import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Footer } from "./components/Footer"
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
