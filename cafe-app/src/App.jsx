import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/AboutPage.jsx";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes> 
  )
}

export default App
