import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Ensure this is correct
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Fetures from "./components/Fetures";
import HowitWorks from "./components/HowitWorks";
import Footer from "./components/Footer";
import * as Sentry from '@sentry/react';
import ReactGA from 'react-ga';

// Initialize Google Analytics
ReactGA.initialize('G-NRNZKBHXQ6');

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};

const App = () => {
  usePageTracking();

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Fetures />
      <HowitWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
