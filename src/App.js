import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import { HashRouter, Route, Routes } from 'react-router-dom'
import Productos from "./components/Productos";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Productos' element={<Productos />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
