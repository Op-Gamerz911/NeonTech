import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Monitor, Cpu, Box, Droplets, PaintBucket, Zap, Shield, Clock, Trophy } from 'lucide-react';
import BuildHelp from './pages/BuildHelp';
import GpuComparison from './pages/GpuComparison';

function HomePage() {
  return (
    <>
      {/* Hero Section with Cards */}
      <section className="pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 tracking-wider hero-tagline">
            Built for Power, Designed for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
            <div className="transform transition-transform hover:-rotate-y-12 hover:scale-105">
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo/1697414776091-4gbbKX63V5I?auto=format&fit=crop&q=80"
                  alt="Gaming PC"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="transform transition-transform hover:-rotate-y-12 hover:scale-105">
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80"
                  alt="Gaming PC"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="transform transition-transform hover:-rotate-y-12 hover:scale-105">
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo/1591488320449-011701bb6704?auto=format&fit=crop&q=80"
                  alt="Gaming PC"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="transform transition-transform hover:-rotate-y-12 hover:scale-105">
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo/1592950630581-03cb41536b88?auto=format&fit=crop&q=80"
                  alt="Gaming PC"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-20 bg-black/40 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Custom Part Picking */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all">
              <Cpu className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Custom Part Picking</h3>
              <p className="text-cyan-200 mb-4">Build your PC exactly how you want it, with our extensive selection of premium components.</p>
              <ul className="text-cyan-200 space-y-2 ml-4 list-disc">
                <li>Latest GPUs and CPUs</li>
                <li>Premium motherboards</li>
                <li>High-performance RAM</li>
                <li>Custom cable options</li>
              </ul>
            </div>

            {/* Pre-built Systems */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all">
              <Box className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Pre-built Systems</h3>
              <p className="text-cyan-200 mb-4">Ready-to-go gaming rigs optimized for performance and value.</p>
              <ul className="text-cyan-200 space-y-2 ml-4 list-disc">
                <li>Entry-level gaming</li>
                <li>Mid-range powerhouse</li>
                <li>Ultimate gaming beast</li>
                <li>Workstation builds</li>
              </ul>
            </div>

            {/* Custom Design */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all">
              <PaintBucket className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Custom Design</h3>
              <p className="text-cyan-200 mb-4">Upload your artwork to customize your PC case and GPU backplate.</p>
              <ul className="text-cyan-200 space-y-2 ml-4 list-disc">
                <li>Custom vinyl wraps</li>
                <li>RGB coordination</li>
                <li>Laser etching</li>
                <li>Custom paint jobs</li>
              </ul>
            </div>

            {/* Watercooled Builds */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all">
              <Droplets className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Watercooled Builds</h3>
              <p className="text-cyan-200 mb-4">Premium custom loop cooling solutions for maximum performance.</p>
              <ul className="text-cyan-200 space-y-2 ml-4 list-disc">
                <li>Hard-line tubing</li>
                <li>Custom reservoirs</li>
                <li>Premium fittings</li>
                <li>RGB integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose NeonTech?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Expert Assembly</h3>
              <p className="text-cyan-200">Built by certified technicians with years of experience</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">3-Year Warranty</h3>
              <p className="text-cyan-200">Comprehensive coverage for peace of mind</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-cyan-200">Technical assistance whenever you need it</p>
            </div>
            <div className="text-center">
              <Trophy className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Premium Quality</h3>
              <p className="text-cyan-200">Only the best components and craftsmanship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Masterpieces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Watercooled Build */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo/1624705002806-5d72df19c3ad?auto=format&fit=crop&q=80"
                alt="Watercooled PC"
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
              <div className="p-4 bg-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white">GlacierCore</h3>
                <p className="text-cyan-200">Custom loop, RGB perfection</p>
              </div>
            </div>

            {/* Custom Design */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo/1600348712270-5af9e3590f66?auto=format&fit=crop&q=80"
                alt="Custom Design PC"
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
              <div className="p-4 bg-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white">ThermaFrost</h3>
                <p className="text-cyan-200">Personalized artwork showcase</p>
              </div>
            </div>

            {/* High-End Build */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo/1587202372616-b43abea06c2f?auto=format&fit=crop&q=80"
                alt="High-End PC"
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
              <div className="p-4 bg-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white">SilentFlow</h3>
                <p className="text-cyan-200">Ultimate gaming experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
          <div>
            <h3 className="text-white font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-cyan-200 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="#" className="text-cyan-200 hover:text-white transition-colors">Team</Link></li>
              <li><Link to="#" className="text-cyan-200 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-cyan-200 hover:text-white transition-colors">Custom Builds</Link></li>
              <li><Link to="#" className="text-cyan-200 hover:text-white transition-colors">Pre-built PCs</Link></li>
              <li><Link to="#" className="text-cyan-200 hover:text-white transition-colors">Watercooling</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-cyan-200 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="#" className="text-cyan-200 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-cyan-200 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="#" className="text-cyan-200 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-cyan-200 hover:text-white transition-colors">Return Policy</Link></li>
              <li><Link to="#" className="text-cyan-200 hover:text-white transition-colors">Warranty Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-cyan-200 hover:text-white transition-colors">Twitter</Link></li>
              <li><Link to="#" className="text-cyan-200 hover:text-white transition-colors">Instagram</Link></li>
              <li><Link to="#" className="text-cyan-200 hover:text-white transition-colors">Discord</Link></li>
            </ul>
          </div>
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
    <Router> {/* Ensuring BrowserRouter is used */}
      <Layout />
    </Router>
  );
}

export default App;
