import React from 'react';

const GPU_COMPARISON_IMAGES = [
  "https://www.zachstechturf.com/gpucomparisons?pgid=ls3dc9yy-441a1f65-95a3-4b6f-a7dc-72a8e3e4d729",
  "https://www.zachstechturf.com/gpucomparisons?pgid=ls3dc9yy-90423fab-470e-4ceb-8460-04ef95cf98ce",
  "https://www.zachstechturf.com/gpucomparisons?pgid=ls3dc9yy-acf1f355-f8ae-47cd-a922-2e8a0f03d182",
  "https://www.zachstechturf.com/gpucomparisons?pgid=ls3dc9yy-1f796864-75c0-43d5-8cfc-127adbfa17b1",
  "https://www.zachstechturf.com/gpucomparisons?pgid=ls3dc9yy-5934f090-a62c-4571-b1b3-a22badf59a86",
  "https://www.zachstechturf.com/gpucomparisons?pgid=ls3dc9yy-6f9854a9-abc8-420f-b204-3fa60e4eb2d3",
  "https://www.zachstechturf.com/gpucomparisons?pgid=ls3dc9yy-8b0eded7-6753-40d1-b88b-39c224e5be6f"
];

function GpuComparison() {
  return (
    <div className="pt-24 px-4 min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">GPU Comparison Charts</h1>
        <div className="grid gap-8">
          {GPU_COMPARISON_IMAGES.map((url, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4">
              <img 
                src={url} 
                alt={`GPU Comparison Chart ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-cyan-200">
          <p>Source: <a 
            href="https://www.zachstechturf.com/gpucomparisons"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-cyan-400"
          >
            zachstechturf.com
          </a></p>
          <p>Last Updated: March 2024</p>
        </div>
      </div>
    </div>
  );
}

export default GpuComparison;
