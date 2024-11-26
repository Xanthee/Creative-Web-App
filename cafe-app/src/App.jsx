import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LocationPage from "./pages/LocationPage.jsx";
import Layout from "./Layout";
import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:3000";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/location" element={<LocationPage />} />
      </Route>
    </Routes> 
  )
}

export default App
