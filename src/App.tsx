import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Monitor, Cpu, Box, Droplets, PaintBucket, Zap, Shield, Clock, Trophy } from 'lucide-react';
import BuildHelp from './pages/BuildHelp';
import GpuComparison from './pages/GpuComparison';

function HomePage() {
  return (
    <>
      {/* Your HomePage content */}
      <section className="pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 tracking-wider hero-tagline">
            Built for Power, Designed for You
          </h2>
          {/* ... rest of your HomePage content ... */}
        </div>
      </section>
      {/* ... rest of your HomePage sections ... */}
    </>
  );
}

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900">
      {/* Navigation Bar */}
      <nav className="bg-black/60 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-['Segoe UI']" style={{ textShadow: '2px 2px 4px rgba(0, 255, 255, 0.2)' }}>
              NeonTech
            </Link>
            <div className="ml-8 space-x-6">
              <Link to="/" className="text-cyan-200 hover:text-white transition-colors">Home</Link>
              <Link to="/shop" className="text-cyan-200 hover:text-white transition-colors">Shop</Link>
              <Link to="/build-help" className="text-cyan-200 hover:text-white transition-colors">Build Help</Link>
            </div>
          </div>
          <Link to="/faq" className="text-cyan-200 hover:text-white transition-colors">FAQs/Warranty</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/build-help" element={<BuildHelp />} />
        <Route path="/gpu-comparison" element={<GpuComparison />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-sm py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* ... your footer content ... */}
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 text-center">
          <Monitor className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
          <p className="text-cyan-200">© 2025 Neon Tech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router> {/* Wrap your Layout with the Router */}
      <Layout />
    </Router>
  );
}

export default App;
