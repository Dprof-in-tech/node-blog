import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/ojuju';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articlelist';
import NotFoundPage from './pages/404';

function App() {
  return (
    <div className="font-ojuju">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/articles' element={<Articles />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
