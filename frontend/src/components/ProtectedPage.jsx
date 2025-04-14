import React from 'react';
import { Link } from 'react-router-dom';

const ProtectedPage = ({ user }) => {
  if (!user) {
    return (
      <div className="text-center mt-10 text-xl text-gray-700">
        Please <Link to="/signup" className="text-blue-600 underline">Signup</Link> or <Link to="/login" className="text-blue-600 underline">Login</Link> to explore the new world.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {["Ironman", "Batman", "Captain America", "Anime", "Naruto"].map(hero => (
        <div key={hero} className="border rounded shadow p-4 text-center">
          <img src={`/${hero.toLowerCase().replace(/ /g, '-')}.jpg`} alt={hero} className="mx-auto w-40 h-40 object-cover" />
          <p className="mt-2 font-semibold">{hero} T-shirt</p>
        </div>
      ))}
    </div>
  );
};

export default ProtectedPage;
