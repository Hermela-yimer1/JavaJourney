import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BrewingGuides from './components/BrewingGuides';
import Calculator from './components/Calculator';
import Forum from './components/Forum';
import LearnMore from './components/LearnMore';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<BrewingGuides />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
