import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, HardDrive, Zap, LayoutGrid, Database } from 'lucide-react';

function BuildHelp() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80"
          alt="Motherboard with CPU"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Build Help</h1>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
            There are a lot of things to consider when it comes to building a PC. To simplify the process, 
            we've put together a one-stop site to access all the charts, links and resources you'll need 
            to build your best gaming PC.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* GPU Comparison Chart */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all">
            <div className="h-32 flex items-center justify-center mb-4">
              <Cpu className="w-20 h-20 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">GPU Comparison Chart</h3>
            <p className="text-cyan-200 mb-4">
              Compare the latest graphics cards and find the perfect balance of performance and value for your build.
            </p>
            <Link 
              to="/gpu-comparison"
              className="inline-block w-full bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors text-center"
            >
              Direct Link
            </Link>
          </div>

          {/* AM4 Compatibility Guide */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all">
            <div className="h-32 flex items-center justify-center mb-4">
              <LayoutGrid className="w-20 h-20 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AM4 Compatibility Guide</h3>
            <p className="text-cyan-200 mb-4">
              Ensure perfect compatibility between your AMD processor and motherboard with our comprehensive guide.
            </p>
            <a 
              href="#" 
              className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
            >
              Direct Link
            </a>
          </div>

          {/* SSD List */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all">
            <div className="h-32 flex items-center justify-center mb-4">
              <HardDrive className="w-20 h-20 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">SSD List</h3>
            <p className="text-cyan-200 mb-4">
              Browse our curated list of SSDs, complete with performance metrics and recommendations for every budget.
            </p>
            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Direct Link
            </a>
          </div>

          {/* PSU Tier List */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all">
            <div className="h-32 flex items-center justify-center mb-4">
              <Zap className="w-20 h-20 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">PSU Tier List</h3>
            <p className="text-cyan-200 mb-4">
              Find the most reliable power supplies ranked by quality, efficiency, and performance.
            </p>
            <a 
              href="#" 
              className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Direct Link
            </a>
          </div>
        </div>

        {/* AM5 Motherboard Database Card - Centered */}
        <div className="max-w-md mx-auto mb-20">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all">
            <div className="h-32 flex items-center justify-center mb-4">
              <Database className="w-20 h-20 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AM5 Motherboard Database</h3>
            <p className="text-cyan-200 mb-4">
              Access our comprehensive database of AM5 motherboards with detailed specifications, features, and compatibility information.
            </p>
            <a 
              href="https://docs.google.com/spreadsheets/d/1Ch31178rJ_DJQ9juDAk4mmHMcYjQFvViqtwzoyMfuPQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Direct Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildHelp;
