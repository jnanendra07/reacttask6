import './App.css';
import Nav from './components/Nav';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, About, Education, Projects  } from './components/F2';
import Contact from './components/Contacts';
import "./components/bootstrap/css/bootstrap.min.css";
import"./components/bootstrap-icons/bootstrap-icons.css";
import "./components/glightbox/css/glightbox.min.css";
import "./components/swiper/swiper-bundle.min.css"
function App() {
  return (
    <div>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
