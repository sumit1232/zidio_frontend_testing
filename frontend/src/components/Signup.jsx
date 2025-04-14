import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Ironman from '../assets/ironman.jpg';
import Batman from '../assets/batman.jpg';
import Captainamerica from '../assets/captainamerica.jpg';
import Naruto from '../assets/naruto.jpg';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const bgImage = [Ironman, Batman, Captainamerica, Naruto];
  const randomImage = bgImage[Math.floor(Math.random() * bgImage.length)];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    localStorage.setItem("superhero-user", JSON.stringify(user));
    setMessage("Signup successful! Welcome to the League, Hero!");
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative text-white font-sans">
      <img src={randomImage} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" />
      <div className="z-10 w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-6 tracking-wide text-green-400">Join the League</h2>
        {message && (
          <p className={`text-center mb-4 ${message.includes("successful") ? "text-green-400" : "text-red-400"}`}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} required onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 px-4 py-3 rounded-md bg-white/20 placeholder-white text-white" />
          <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-3 rounded-md bg-white/20 placeholder-white text-white" />
          <div className="relative w-full mb-6">
            <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-white/20 placeholder-white text-white" />
            <button type="button" onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70">
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button type="submit"
            className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-3 rounded-md transition-all">
            Become a Hero
          </button>
        </form>
        <p className="text-center mt-4">
          Already a Hero? <Link to="/login" className="text-green-300 font-semibold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
