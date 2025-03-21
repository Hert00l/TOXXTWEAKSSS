import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Download } from './components/Download';
import { FAQ } from './components/FAQ';
import { Premium } from './components/Premium';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="relative">
              <Hero />
              <Features />
              <Download />
              <FAQ />
            </main>
          } />
          <Route path="/premium" element={<Premium />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;