import { useState } from 'react'
//import react-router-dom components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import pages
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';  
import Loader from './components/loader';
import Navbar from './components/navbar';
import { useSelector } from 'react-redux';

function App() {
  const isLoading = useSelector((state) => state.loader);

  return (
    <>
    {isLoading && <Loader />}
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
