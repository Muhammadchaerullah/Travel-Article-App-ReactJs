import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from "../components/Navbar";
import About from "../pages/About/About";
import Contact from "../pages/About/Contact";
import Force from "../pages/About/Force";
import Modification from "../pages/About/Modification";
import Privacy from "../pages/About/Privacy";
import Terms from "../pages/About/Terms";
import Footer from "../components/Footer";
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function AppRoutes() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/About/About' || location.pathname === '/About/Contact' || location.pathname === '/About/Force' || location.pathname === '/About/Modification' || location.pathname === '/About/Privacy' || location.pathname === '/About/Terms'

  return (
    <>
      {/* Conditional rendering untuk Navbar */}
      {!hideNavbar && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About/About" element={<About />} />
        <Route path="/About/Contact" element={<Contact />} />
        <Route path="/About/Force" element={<Force />} />
        <Route path="/About/Modification" element={<Modification />} />
        <Route path="/About/Privacy" element={<Privacy />} />
        <Route path="/About/Terms" element={<Terms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}
