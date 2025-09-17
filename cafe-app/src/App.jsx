import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/AboutPage.jsx";
import Contact from "./pages/ContactPage.jsx";
import FrontEnd from "./pages/FrontEndPage.jsx";
import Layout from "./Layout";
import UXDesign from './pages/UXDesignPage.jsx';
import UXResearch from './pages/UXResearchPage.jsx';
import CreativeWork from './pages/CreativeWorkPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/frontend" element={<FrontEnd />} />
        <Route path="/uxdesign" element={<UXDesign />} />
        <Route path="/uxresearch" element={<UXResearch />} />
        <Route path="/creativework" element={<CreativeWork/>} />                               
      </Route>
    </Routes> 
  )
}

export default App
