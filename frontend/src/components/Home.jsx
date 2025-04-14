import React from 'react';
import ironman from '../assets/ironman.jpg';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Home = () => (
  <div className="relative h-[80vh]">
    <Canvas className="absolute inset-0 z-0">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      <OrbitControls />
    </Canvas>
    <div className="absolute inset-0 bg-cover bg-center z-10" style={{ backgroundImage: `url(${ironman})`, opacity: 0.6 }}></div>
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <h2 className="text-4xl font-semibold text-white bg-black/50 px-6 py-4 rounded-lg">Begin Your Journey</h2>
    </div>
  </div>
);

export default Home;
