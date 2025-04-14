import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("superhero-user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-[#222222] text-white">
      <h1 className="text-xl font-bold">SuperHero</h1>
      <div className="space-x-4">
        {!user ? (
          <>
            <Link to="/signup" className="hover:bg-white hover:text-black px-4 py-2 rounded transition">Signup</Link>
            <Link to="/login" className="hover:bg-white hover:text-black px-4 py-2 rounded transition">Login</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded hover:bg-red-800 transition">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
