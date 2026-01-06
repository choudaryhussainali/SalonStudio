import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';

// Direct imports to ensure reliable loading
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Pricing from './pages/Pricing';
import Booking from './pages/Booking';
import Location from './pages/Location';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the preloader animation
    // Using static imports prevents the "stuck" issue, while this timer ensures the effect plays.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      
      {!isLoading && (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/book" element={<Booking />} />
            <Route path="/location" element={<Location />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      )}
    </Router>
  );
};

export default App;